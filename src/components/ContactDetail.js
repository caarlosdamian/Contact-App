import React from "react";
import user from "../images/user.jpg";
import { Link } from "react-router-dom";
const ContactDetail = () => {
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Carlos</div>
          <div className="description">dape@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
