import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    name: "Ben ",
    address: "HCM",
    age: 25,
  };
  render() {
    return (
      <div>
        My name is {this.state.name}
        and I'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
