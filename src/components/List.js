import React from "react";
import ListItem from "./ListItem";

const List = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((element, index) => {
          return (
            <ListItem
              todo={element.todo}
              id={element.id}
              key={element.id}
            ></ListItem>
          );
        })}
      </ul>
    </>
  );
};

export default List;
