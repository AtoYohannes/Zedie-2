import React from "react";
import SignIn from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";

const SlidingDrawer = ({ type, show }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={drawerClasses}>
      {type === "signIn" ? <SignIn /> : <SignUp />}
    </div>
  );
};

export default SlidingDrawer;
