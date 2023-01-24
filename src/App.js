import React from "react";
import "./style.css";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      list:[
        {name:"anil",phone:"98344",email:"spd@anil.com"},
        {name:"sunil",phone:"1111",email:"apd@anil.com"},
        {name:"rahul",phone:"2222",email:"ska@anil.com"},
        {name:"rohit",phone:"3333",email:"rahu@anil.com"}
      ]

    }
  }
  render(){
  return (
    <div>
      <h1> MAP FUNCTION listing</h1>
      <h2>
        {
          this.state.list.map((item)=>
          <div> Name:{item.name}, Phone:{item.phone}, Email:{item.email}</div>
          )
        }
      </h2>
    </div>
  );
}
}
export default App;
