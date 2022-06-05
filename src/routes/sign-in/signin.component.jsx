/*
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
*/
import SignUpForm from "../../components/sign-up-form/signUpForm.compontent";
import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    
    /*useEffect(() => {
        const signInRedirect = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
               const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        signInRedirect()
    },[]);*/

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    return (
        <div>
            <h1>Signin Page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>
            <SignUpForm/>
           {/**  
           <button onClick={signInWithGoogleRedirect}>
                Sign In With Google Redirect
            </button> */
            }
        </div>
    )

}


export default SignIn;