import React from "react";
import "./homepage.css"
import { useHistory } from "react-router-dom";
function Homepage() {
    const history = useHistory();
    
    return (
        <div className="homepage">
            <h1>HomePage</h1>
            <div className="button" onClick={() => history.replace("/")}>Logout</div> 
        </div>
    )
}

export default Homepage;