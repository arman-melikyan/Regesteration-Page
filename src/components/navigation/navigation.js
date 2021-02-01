import React from "react";
import { Link } from "react-router-dom";
import { ImHome, ImUsers, ImExit } from "react-icons/im";
import "./style.css";

const Navigation = () => {
  return (
    <div className="Nav">
      <Link to="/">
        <i className="Icon">
          <ImHome />
        </i>
      </Link>

      <Link to="/chakbox">
        <i className="Icon">
          <ImUsers />
        </i>
      </Link>

      <Link to="/">
        <i className="Icon">
          <ImExit />
        </i>
      </Link>
    </div>
  );
};

export default Navigation;
