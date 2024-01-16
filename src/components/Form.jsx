import React from "react";
import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function Form(props) {
const [task,setTask] = React.useState("");

  function handlesubmit(e) {
    e.preventDefault();
    if (!task.trim()) {
        alert("Task is empty");
        return; // Prevent submitting the form if the task is empty
    }
    props.addTask({
        name : task,
         })
    setTask(" ");
  }

  function Settasks(event){
     setTask(event.target.value);
  }

  return (
    <div className="form">
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          className="textbox"
          maxLength={50}
          value={task}
          onInput={Settasks}
        />
        <Button variant="contained" className="textbutton" type="submit">
          <AddBoxIcon />
        </Button>
      </form>
    </div>
  );
}
