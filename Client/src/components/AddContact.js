import React, { useRef, useState } from "react";

const AddContact = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const contact = { name, email };
  const nameInput = useRef(null);
  const emailInput = useRef(null);

  const add = (e) => {

    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory.!");
      return;
    }
    props.addContactHandler(contact);
    nameInput.current.value = "";
    emailInput.current.value = "";
    setName("")
    setEmail("")
    props.history.push("/") 

  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            ref={nameInput}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            ref={emailInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
