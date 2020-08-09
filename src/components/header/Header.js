import React from "react";
import Classes from "./Header.module.scss";

const Header = (props) => {

  const availableCheck = () => {
    return props.OnlyAvailable ? (
      <div
        className={Classes.Available}
        style={{ backgroundColor: "green",color:"whitesmoke" }}
        onClick={props.changeAvailable}
      >
        filter available
      </div>
    ) : (
      <div className={Classes.Available} onClick={props.changeAvailable}>
        filter available
      </div>
    );
  };

  return (
    <div className={Classes.Header}>
      <span className={Classes.BrandName}>Shop Cart</span>
      {availableCheck()}
    </div>
  );
};

export default Header;
