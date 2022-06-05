import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setForm] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const {name,value} = event.target;
    setForm({
      ...formFields,
      [name]: value,
    });

  };

  return (
    <div>
      <h1>Signup with your email and password</h1>
      <form onSubmit={() => {}}>
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
