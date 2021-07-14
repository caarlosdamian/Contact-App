import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const removeContactHandler = (id) =>{
    props.getContactId(id)
  }
  const renderContactList = props.data.map((contact, key) => {
    return <ContactCard key={contact.id} contact={contact} clickHander={removeContactHandler} />;
  });
  return <div className="ui celled list">{renderContactList}

  
  </div>;
};

export default ContactList;
