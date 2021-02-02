import React from "react";

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



import { signOutStart } from "../../redux/user/user.action";

const Header = ({ user, cartVisibility,signOut }) => {
  
  return (
    <HeaderContainer>
      <LogoConatiner to="/">
        <Logo />
      </LogoConatiner>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
        {user ? (
          <OptionLink
            as={"div"}
            onClick={() => signOut()}
          >
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signIn">Sign in</OptionLink>
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
const mapDispatchToProps=(dispatch)=>({
  signOut:()=>dispatch(signOutStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);
