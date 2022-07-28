import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Contact(props) {
  return (
    <div>
      <div className="card">
        <div className="top ">
          <p className="info">{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.imgURL} />
        </div>
        <div className="bottom">
          <Info details={props.phone} />
          <Info details={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
