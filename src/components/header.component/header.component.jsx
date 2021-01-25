import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utills";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHidden } from "../../redux/cart/cart.selector";
import {  createStructuredSelector} from "reselect";

const Header = ({ user,cartVisibility }) => {
  
  return (
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
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signIn">
            Sing in
          </Link>
        )}
        <CartIcon  />
      </div>
      {
        cartVisibility?null:<CartDropDown />
      }
       
    </div>
  );
};

const mapStateToProps = createStructuredSelector ({
  user: selectCurrentUser,
  cartVisibility: selectHidden,
});


export default connect(mapStateToProps)(Header);
