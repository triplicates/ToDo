import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import DoneIcon from "@material-ui/icons/Done";
import "./Task.scss";

const Task = ({ task, removeToDo }) => {
  let [status, setStatus] = useState("process");

  let hundleClick = () => {
    status === "process"
      ? setStatus((status = "complete"))
      : setStatus((status = "process"));
  };

  return (
    <article className={`task ${status === "complete" ? "task_complete" : ""}`}>
      <p>{task.text}</p>
      <div className="task__controls">
        <DoneIcon
          onClick={hundleClick}
          className={`task__btn task__btn-complete task_btn-hovered ${
            status === "complete" ? "task__btn-complete_true" : ""
          }`}
          type="button"
          value="C"
        />
        <input
          onClick={() => {
            removeToDo(task.id);
          }}
          className="task__btn task__btn-remove task_btn-hovered"
          type="button"
          value="Remove"
        />
      </div>
    </article>
  );
};

Task.propTypes = {
  task: propTypes.object.isRequired,
  removeToDo: propTypes.func,
};

export default Task;
