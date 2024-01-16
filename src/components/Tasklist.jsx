import React from "react";
import Taskitems from "./Taskitems";

export default function Tasklist({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Taskitems task={task} key={task.id} />
      ))}
    </ul>
  );
}
