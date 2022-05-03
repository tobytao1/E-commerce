import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { userContext } from "../../context/userContext.js";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { out } from "../../utils/firebase/firebase.utils.js";
import { CartIcon } from "../../components/carticon/carticon.component";
import "./navigation.styles.scss";
import { DropDown } from "../../components/dropdown/dropdown.component.jsx";
import { CartContext } from "../../context/cartContext.js";
const Navigation = () => {
  const { currentUser, setContext } = useContext(userContext);

  const { display } = useContext(CartContext);
  const signOutHandler = async () => {
    await out();
    setContext(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      {display ? <DropDown /> : null}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
