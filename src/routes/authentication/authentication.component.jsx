/*
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
*/
import SignInForm from "../../components/sign-in-form/signInForm.compontent";
import SignUpForm from "../../components/sign-up-form/signUpForm.compontent";
import './authentication.styles.scss'
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
        <div className="authentication-container">
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