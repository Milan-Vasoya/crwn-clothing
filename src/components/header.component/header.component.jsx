import React from "react";
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utills';
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({user}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {user ? (
        <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
      ) : (
        <Link className="option" to="/signIn">
          Sing in
        </Link>
      )}
    </div>
  </div>
);

export default Header;
