import React from "react";
import Contact from "./Contact";
import Contacts from "../contacts";

function CreateContact(contact) {
  return (
    <Contact
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map(CreateContact)}
    </div>
  );
}

export default App;
