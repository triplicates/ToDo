import React, { Component } from "react";
import "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hundleChange = this.hundleChange.bind(this);
  }
  hundleChange(e) {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  }
  render() {
    return (
      <input
        name="search"
        className="search"
        placeholder={this.props.placeholder}
        type="search"
        autoComplete="off"
        value={this.state.name}
        onChange={this.hundleChange}
      />
    );
  }
}

export default Search;
