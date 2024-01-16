import React, { useState } from "react";
import Form from "./components/Form";
import Tasklist from "./components/Tasklist";

export default function App() {
  const [task, setTask] = useState("");
  

  function addTask(prevtasks) {
    setTask((prev) => [...prev, prevtasks]);
  }



  return (
    <div className="main">
    <br></br>
      <h1>Todolist</h1>
      <Form addTask={addTask} />
      {task && <Tasklist tasks={task} />}
     
    </div>
  );
}
