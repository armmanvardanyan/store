import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword, createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput.component";

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
      <form onSubmit={handleSubmit}  >
        <FormInput 
            label = "Display Name"
            inputOptions = {{
                onChange: handleChange,
                type: "text",
                name: "displayName",
                value: displayName,
                required: true,
            }}
        />
        <br />
        <FormInput
          label = "Email"
          inputOptions = {{
            onChange: handleChange,
            type: "email",
            name: "Email",
            value: email,
            required: true,
        }}
        />
        <br />
        <FormInput
          label = "Password"
          inputOptions = {{
            onChange: handleChange,
            type: "password",
            name: "password",
            value: password,
            required: true,
            autoComplete : "new-password"
        }}
        />
        <br />
        <FormInput
          label = "Confirm Password"
          inputOptions = {{
            onChange: handleChange,
            type: "password",
            name: "confirmPassword",
            value: confirmPassword,
            required: true,
            autoComplete : "new-password"
        }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
