import { auth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return (
        <div>
            <h1>Signin Page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>
        </div>
    )

}


export default SignIn;