import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Taskitems({ task }) {
  const [checked, setC] = React.useState(false);
  const [Del, setD] = React.useState(false);
  function Done() {
    setC((prev) => !prev);
  }
  function Delete() {
    setD((prev) => !prev);
  }

  return (
    <div className="tasks" style={{ display: Del && "none" }}>
      <div className="task">
        <input
          type="checkbox"
          id="myCheckbox"
          name="myCheckbox"
          onClick={Done}
        />
        <h2
          style={{
            display: "inline",
            textDecoration: checked && "line-through",
          }}
        >
          {task.name}
        </h2>
      </div>
      <div>
        <IconButton aria-label="delete" size="small" onClick={Delete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}
