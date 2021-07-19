import React from "react";

class ClassComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) { this.setState({value: event.target.value}); }
  
    render() {
      return (
          <div>
            <h1>Hello Class {this.state.value} </h1>
            <input type="text" 
            value={this.state.value}  
            placeholder = "message" 
            onChange={this.handleChange} />  
        </div>
      );
    }
  }
export default ClassComp;