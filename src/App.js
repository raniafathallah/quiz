import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div >
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          
            <Route path="/adduser" component={AddUser} />
        
            <Route path="/edit/:id" component={EditUser} />
            <Route path="/quiz" component={Home} />
         
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App