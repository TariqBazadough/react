import React from "react";

const ListItem = ({ todo, id }) => {
  const logId = (e) => {
    console.log(id);
  };
  return (
    <>
      <li onClick={logId}>{todo}</li>
    </>
  );
};

export default ListItem;
