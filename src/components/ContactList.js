import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props.data.map((contact, key) => {
    return <ContactCard key={key} contact={contact} />;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
