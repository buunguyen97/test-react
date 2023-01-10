import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    name: "Ben ",
    address: "HCM",
    age: 25,
  };
  handleClick(e) {
    console.log("SSSSSSSSSSSSSSSSSSSSSS");
    console.log(e.pageX);
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <br></br>
        <button onMouseOver={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
