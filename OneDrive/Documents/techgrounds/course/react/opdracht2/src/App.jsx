import React from "react";
import ClassComp from "./ClassComp"
import FunctionalComp from "./FunctionalComp"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleFunctionChange = this.handleFunctionChange.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.state = {value: ''};
  }

  handleClassChange(value) {
    this.setState({value});
  }

  handleFunctionChange(value) {
    this.setState({value});
  }

  render() {
    const value = this.state.value;
    return (
      <div>
      <ClassComp 
      value={value}
      onInputChange={this.handleClassChange} />
      <FunctionalComp value={value}
        onInputChange={this.handleFunctionChange}
      />
    </div>
    );
  }
}

export default App;

