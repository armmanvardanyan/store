import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword, createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setForm] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => setForm(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email,password);

      await createUserDocumentFromAuth(user, {displayName} ); // creating same user in Fiestore with displayName

      console.log(user);

      resetForm();

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Signup with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="displayName"
          value={displayName}
          placeholder="Name"
          required
        />
        <br />
        <label>Email</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          required
        />
        <br />
        <label>Password</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          required
        />
        <br />
        <label>Confirm Password</label>
        <input
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
