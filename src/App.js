import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import SecurityHome from "./components/securityhome/SecurityHome";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/homepage">
            <Homepage />
          </Route>
          <Route path="/securityhome">
            < SecurityHome/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
