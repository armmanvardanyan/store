/*
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
*/
import Button from "../../components/button/button.component";
import SignInForm from "../../components/sign-in-form/signInForm.compontent";
import SignUpForm from "../../components/sign-up-form/signUpForm.compontent";
import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

const Authentication = () => {
    
    /*useEffect(() => {
        const signInRedirect = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
               const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        signInRedirect()
    },[]);*/

    return (
        <div>
            <SignInForm/>
            <SignUpForm/>
           {/**  
           <button onClick={signInWithGoogleRedirect}>
                Sign In With Google Redirect
            </button> */
            }
        </div>
    )

}


export default Authentication;