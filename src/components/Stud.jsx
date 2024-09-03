import React from 'react';

class Stud extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "yellow" };
  }

  componentDidMount() {
    console.log("Hello...")
  }

  componentDidUpdate() {
    console.log("Update")
  }

  changeState = () => {
    this.setState({ color: "blue" })
  }

  render() {
    return (
      <div>
        <h2>Hello from Stud Component</h2>
        <p>My Favorite Color is {this.state.color}</p>
        <button onClick={() => this.changeState()}>Click Me</button>
      </div>
    );
  }
}

export default Stud