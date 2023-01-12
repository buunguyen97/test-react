import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    name: "Ben ",
    address: "HCM",
    age: 25,
  };
  //   handleClick = (e) => {
  //     this.setState({
  //       name: "niiiiii",
  //     });
  //     console.log("click me rooi ne");
  //     console.log("My name is ", this.state.name);
  //   };
  //   handleHover(e) {
  //     console.log("SSSSSSSSSSSSSSSSSSSSSS");
  //     console.log(e.pageX);
  //   }
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <br></br>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
