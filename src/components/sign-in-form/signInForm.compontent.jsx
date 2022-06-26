import { useState } from "react";

import {
  //createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import Button, {BUTTUN_TYPE_CLASSES} from "../button/button.component";


import FormInput from "../form-input/FormInput.component";
import './sign-in-form.style.scss';
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setForm] = useState(defaultFormFields);
  const { email, password } = formFields;

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

    try {
      const response = await signInUserWithEmailAndPassword(email,password);
      resetForm()
    } catch (error) {
        const errorCodes = {
          'auth/wrong-password': "incorrect password for email",
          'auth/user-not-found': "Doesnt exists user with that email",
        }
       
        if(errorCodes[error.code]) {
          console.log(errorCodes[error.code]);
        }else {
          console.log(error);
        }
    }
   
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  return (
    <div className="sign-in-container">
      <h2 className="">Already have an account ? </h2>
      <span className=""> Sign In with your email and password </span>
      <form onSubmit={handleSubmit}  >
        <FormInput 
            label = "Email"
            inputOptions = {{
                onChange: handleChange,
                type: "email",
                name: "email",
                value: email,
                required: true,
              
            }}
        />
        <FormInput 
            label = "Password"
            inputOptions = {{
                onChange: handleChange,
                type: "password",
                name: "password",
                value: password,
                required: true,
            }}
        />
        <div className="buttons-container">
          <Button type = "submit">Sign in </Button>
          <Button type = "button" onClick = {signInWithGoogle} buttonType= {BUTTUN_TYPE_CLASSES.google}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
