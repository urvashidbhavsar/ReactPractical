import React from "react";

class Stateex2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }
  render() {
    return (
      <>
        <button onClick={this.increment}>add</button>
        <button onClick={this.decrement}>deduct</button>
        <p>{this.state.count}</p>
      </>
    )
  }
}
export default Stateex2;