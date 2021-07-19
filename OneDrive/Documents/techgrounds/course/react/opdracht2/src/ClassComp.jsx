import React from "react";

class ClassComp extends React.Component {
  
  
    render() {
      return (
          <div>
            <h1>Hello Class {this.props.greeting} </h1>
            <input type="text"   
            placeholder = "message" 
            onChange={this.function}
            defaultValue={this.props.value} />  
        </div>
      );
    }
  }
export default ClassComp;
