import { Component } from "react";

class Employee extends Component{
constructor(props){
    super();
this.props=props
}
    render(){

    return(

      <>
      {this.props.fname}
      {this.props.lname}
      {this.props.birthday}
     <img src={this.props.pic}/> 




      </>
    )
    }
}

export default Employee;