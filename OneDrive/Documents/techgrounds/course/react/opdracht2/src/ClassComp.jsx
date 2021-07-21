import React from "react";

class ClassComp extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) { 
      this.props.onInputChange(event.target.value); }
  
    render() {
      const value = this.props.value
      return (
          <div>
            <h1>Hello Class {value} </h1>
            <input type="text" 
            value={value}  
            placeholder = "message" 
            onChange={this.handleChange} />  
        </div>
      );
    }
  }
export default ClassComp;
