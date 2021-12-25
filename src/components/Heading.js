import {
    NavLink,
    Nav,
    NavItem
  } from "reactstrap";

  import {Link} from 'react-router-dom';
import React from 'react';

export const Heading = () => {
  return (
    <div>
       <Nav pills>
      <NavItem>
          <NavLink active href="#"> <span> QUIZ  </span> </NavLink>
      </NavItem>

  
      <NavItem>
        <Link to={`adduser/`}  className="btn mr-1 ">
        <NavLink >
        Add Quiz
        </NavLink>
        </Link>
      </NavItem>
      <NavItem>

  
      <Link to={`/`}  className="btn mr-1 ">
      <NavLink >
      View All Quizes
      </NavLink>
      </Link>
    </NavItem>
        </Nav>
    </div>
  )
}

export default Nav
