import React from "react";

class Stateex extends React.Component {
  constructor() {
    super();
    this.state = {
      objname: "React"
    }
  }
  handleEvent = () => {
    this.setState({ objname: "Node" })
  }
  render() {
    return (
      <>
        <button onClick={this.handleEvent}>Click</button>
        <p>{this.state.objname}</p>
      </>
    )
  }
}
export default Stateex;