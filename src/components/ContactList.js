import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const removeContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.data.map((contact, key) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHander={removeContactHandler}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
