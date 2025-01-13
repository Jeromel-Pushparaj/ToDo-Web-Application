import React from "react";
import "../App.css";
const ListItem = (props) => {
  return (
    <ul className="task-list">
      {props.tasks.map((ele, i) => {
        return (
          <li>
            <span
              className={ele.completed ? "strikeTask" : ""}
              onClick={() => props.handleStrikthrough(i)}
            >
              {ele.text}
            </span>
          <div classNam="btn-container" >
            <button className="btn">Edit</button>
            <button className="btn" onClick={() => props.handleDeleteTask(i)}>Delete</button>
          </div>
          </li>

        );
      })}
    </ul>
  );
};

export default ListItem;
