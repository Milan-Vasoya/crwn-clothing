import React from "react";
import { auth } from "../../firebase/firebase.utills";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  OptionsContainer,
  LogoConatiner,
  OptionLink,
} from "./header.styles";

const Header = ({ user, cartVisibility }) => {
  return (
    <HeaderContainer>
      <LogoConatiner to="/">
        <Logo />
      </LogoConatiner>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
        {user ? (
          <OptionLink as={'div'} onClick={() => auth.signOut()}>Sign Out</OptionLink>
        ) : (
          <OptionLink to="/signIn">Sing in</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {cartVisibility ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  cartVisibility: selectHidden,
});

export default connect(mapStateToProps)(Header);
