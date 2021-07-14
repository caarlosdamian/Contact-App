import React, { useRef, useState } from "react";

const EditContact = (props) => {
  const { name, email, id } = props.location.state.contact;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  const nameInput = useRef(null);
  const emailInput = useRef(null);

  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("All the fields are mandatory.!");
      return;
    }
    props.updateContactHandler({ id: id, name: newName, email: newEmail });
    // setContact({name:"",email:""})
    nameInput.current.value = "";
    emailInput.current.value = "";
    props.history.push("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            ref={nameInput}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newEmail}
            ref={emailInput}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
