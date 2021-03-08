import React from "react";

const Comments = (props) => {
  const { name, email, body, id } = props.comment;
  return (
    <div>
      <p>Comment No: {id}</p>
      <h3>{name}</h3>
      <h5>{email}</h5>
      <p>{body}</p>
    </div>
  );
};

export default Comments;
