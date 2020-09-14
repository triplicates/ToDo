import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.hundleClick = this.hundleClick.bind(this);
  }
  hundleClick() {
    this.setState({ clicked: !this.state.clicked });
  }
  render() {
    return (
      <button onClick={this.hundleClick} className={this.props.className}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
