import React, { Component, useState } from "react";
import propTypes from "prop-types";
import Task from "../Task/Task.jsx";
import "./ToDo.scss";

const ToDo = ({ datas }) => {
  let _data = datas || [],
    [data, setData] = useState(_data),
    [value, setValue] = useState(""),
    ID = data[data.length - 1] ? data[data.length - 1].id : 0;

  // Events

  let renderToDos = (data) => {
    if (!data.length) return <h1 className="ToDo__empty">Empty :(</h1>;
    let content = data.map((task) => {
      return <Task key={task.id} task={task} removeToDo={removeToDo} />;
    });

    return content.reverse();
  };

  let removeToDo = (id) => {
    setData(data.filter((todo) => todo.id !== id));
  };

  let hundleChange = (e) => {
    setValue(e.target.value);
  };

  let hundleSubmit = (e) => {
    e.preventDefault();
    if (!value.length) return;
    let task = {
      id: ++ID,
      text: value,
    };
    setData(data.concat(task));
  };

  // Render

  return (
    <div className="ToDo">
      <div className="ToDo__inner">
        <section className="ToDo__upper">{renderToDos(data)}</section>
        <form className="ToDo__form" action="#">
          <input
            onChange={hundleChange}
            className="ToDo__text"
            type="text"
            placeholder="Please write your task"
          />
          <input
            onClick={hundleSubmit}
            className="ToDo__btn"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

ToDo.propTypes = {
  datas: propTypes.array,
};

export default ToDo;
