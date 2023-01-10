import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    name: "Ben ",
    address: "HCM",
    age: 25,
  };
  handleClick = (e) => {
    this.setState({
      name: "niiiiii",
    });
    console.log("click me rooi ne");
    console.log("My name is ", this.state.name);
  };
  handleHover(e) {
    console.log("SSSSSSSSSSSSSSSSSSSSSS");
    console.log(e.pageX);
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <br></br>
        <button onMouseOver={this.handleHover}>Hover me</button>
        <br></br>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
