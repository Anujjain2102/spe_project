import React, {useState}  from "react";
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom";

function Login() {

    const history = useHistory();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
         setUser({ ...user, [name]: value });
    };

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message);
            setUser(res.data.user);
            if(res.data.user.role === "student"){
                history.replace('/homepage', {user}); 
            }
            else{
                history.replace('/securityhome', {user});
            }
        })
    }

    return (
        <div>
        {console.log(user)}
            <h1 className="name">Security Suvidha</h1>
            <div className="login">
                <h1> Login </h1>
                <br/>
                <input type="email" name="email" value={user.email} placeholder="Email ID" onChange={ handleChange } />
                <br/>
                <input type="password" name="password" value={user.password} placeholder="Password" onChange={ handleChange } />
                <br/>
                <div className="button" onClick={ login }>Login</div>
                <div>OR</div>
                <div className="button" onClick={() => history.push("/register")}>Register</div>
            </div>
        </div>
    )
}

export default Login;