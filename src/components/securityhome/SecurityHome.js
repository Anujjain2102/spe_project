import React, {useState , useEffect} from 'react'
import "./securityhome.css"
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function SecurityHome() {
    const history = useHistory();
    const location = useLocation();
    const { user } = location.state;

    const [userData, setUserData] = useState({
      name: "",
      email: "",
      mobile: "",
      role: "",
      password: "",
  });
  const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:9002/users/${user.email}`);
        setUserData(prevState => {
          //console.log("Updated userData:", prevState);
          return response.data.user;
        });
      } catch (error) {
        console.log(error);
  }
};
  
  
    useEffect(() => {
      fetchUser();
      console.log(userData)
    }, [userData]);



  return (
    <div className="securityhome">
            <h1>Welcome {userData.name} !</h1>
            <p> Email id :{userData.email}</p>
            <p> Mobile :{userData.mobile}</p>
            <p> Role :{userData.role}</p>
            <div className="button" onClick={() => history.replace("/")}>Logout</div> 
        </div>
    
  )
}

