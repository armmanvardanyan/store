import './button.styles.jsx';
import { BaseButton, GoogleSignInButton,InvertedButton} from './button.styles.jsx';


export const BUTTUN_TYPE_CLASSES = {
    'base': 'base',
    'google': 'google-sign-in',
    'inverted': 'inverted',
}

const getButton = (buttonType = BUTTUN_TYPE_CLASSES.base) => {
    return ({
        [BUTTUN_TYPE_CLASSES.base]: BaseButton,
        [BUTTUN_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTUN_TYPE_CLASSES.inverted]: InvertedButton,
    })[buttonType]
}

const Button = ({children,buttonType,...otherProps}) => {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    )
}

export default Button;