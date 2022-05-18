import React , {useState} from "react";
import './styles/login.css'
import Body from "./Body";
const Login = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
     const handleSubmit = () => {
         setIsSubmitted(true);
     };

const Form = (
    <div className="body">
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="user-input">
                <label>Email</label>
                <input type={"email"} required/>
            </div>
            <div className="user-input">
                <label>Password</label>
                <input type={"password"} required/>
            </div>
            <div className="user-input">
                <input type={"submit"} value = "submit"/>
            </div>
            
        </form> 
        </div> 
);
    return (
        <div>
            {isSubmitted ? <Body/> : Form} 
        </div>
    );
}

export default Login;