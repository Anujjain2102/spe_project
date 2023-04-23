import React, {useState} from "react";
import "./register.css"
import axios from "axios"

function Register() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        role: "student",
        password: "",
        confirmpass: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
         setUser({ ...user, [name]: value });
    };

    const register = () =>{
        const { name, email, mobile, role, password, confirmpass } = user
        if(name && email && mobile && password && confirmpass)
        {
            if(password === confirmpass)
            {
                // alert("Nice..")
                axios.post("http://localhost:9002/register",user)
                .then(res => console.log(res))
            }
            else
            {
                alert("Password not matched!")
            }
        }
        else
        {
            alert("Invalid Input!!")
        }
    }

    return (
        <div>
        {console.log(user)}
            <h1 className="name">Security Suvidha</h1>
            <div className="register">
                <h1> Register </h1><br/>

                <div>
                <label><input type="radio" id="student" name="role" value="student" checked={user.role === "student"} onChange={ handleChange } /> Student</label>
               
               <label><input className="radio" type="radio" id="security" name="role" value="security" checked={user.role === "security"} onChange={ handleChange }/> Security</label>
               
                </div>
                <br/><input type="text" name="name" value={user.name} placeholder="Name" onChange={ handleChange } />
                
                <input type="email" name="email" value={user.email} placeholder="Email ID" onChange={ handleChange } />
                <br/>
                <input type="tel" name="mobile" value={user.mobile} placeholder="Mobile Number" onChange={ handleChange } />
                
                
                <input type="password" name="password" value={user.password} placeholder="Password" onChange={ handleChange } />
                
                <input type="password" name="confirmpass" value={user.confirmpass} placeholder="Confirm Password" onChange={ handleChange } />
                
                <div className="button" onClick={ register }>Submit</div>
            </div>
        </div>
    )
}

export default Register;