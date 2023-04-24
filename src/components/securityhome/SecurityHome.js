import React from 'react'
import "./securityhome.css"
import { useHistory } from 'react-router-dom'

export default function SecurityHome() {
    const history = useHistory();
  return (
    <div className="securityhome">
            <h1>Security Home</h1>
            <div className="button" onClick={() => history.replace("/")}>Logout</div> 
        </div>
    
  )
}

