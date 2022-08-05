import { Component } from "react";
import Employee from './employe.component';

class Employes extends Component{
    render(){
        return(
<>
<Employee fname="avi" lname="meko" birthday="31/45/12" pic="logo192.png"/>
<Employee fname="avi" lname="meko" birthday="31/45/12" pic="logo192.png"/>
<Employee fname="avi" lname="meko" birthday="31/45/12" pic="logo192.png"/>
</>
        )
    }
}

export default Employes;