import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./ToDo.scss";

class Task extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    complete: this.props.task.status,
  };

  // Events

  hundleClick = () => {
    let status = this.state.complete;

    if (status === "processed") {
      this.setState({
        complete: "complete",
      });
    } else {
      this.setState({
        complete: "processed",
      });
    }
  };

  render() {
    let { task } = this.props;
    let { complete } = this.state;
    return (
      <article
        className={` ToDo__task ${
          complete === "complete" ? "ToDo__task-complete" : ""
        }`}
      >
        <h3 className="ToDo__task-title">{task.title}</h3>
        <input onClick={this.hundleClick} type="checkbox" />
      </article>
    );
  }
}

class ToDo extends Component {
  state = {
    Tasks: [],
  };
  // Events

  hundleClick = (e) => {
    e.preventDefault();

    let task = {
      title: this.state.value,
      status: "processed",
    };

    this.setState({
      Tasks: this.state.Tasks.concat(task),
    });
  };

  hundleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  // Render
  render() {
    let content,
      { Tasks } = this.state;
    if (Tasks.length) {
      content = Tasks.map((task) => {
        return <Task task={task} />;
      });
    } else {
      content = <p>Empty</p>;
    }

    return (
      <div className="ToDo">
        <section className="ToDo__tasks">{content}</section>
        <form className="ToDo__form" action="">
          <input
            onChange={this.hundleChange}
            className="ToDo__text"
            type="text"
          />
          <input
            onClick={this.hundleClick}
            className="ToDo__btn"
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default ToDo;
