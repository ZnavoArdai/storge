import Employee from "./employe.component"
const arrya=[<Employee fname="avi" lname="meko" birthday="31/45/12" pic="logo192.png"/>,
<Employee fname="haim" lname="koo" birthday="31/45/12" pic="logo192.png"/>
,<Employee fname="cohne" lname="meffko" birthday="31/45/12" pic="logo192.png"/>
,<Employee fname="bibi" lname="neati" birthday="31/45/12" pic="logo192.png"/>

]
function List(){

return (

    <>
    {arrya.map(item=>
        
        <div>{item}</div>
        )}
    
    </>
)
}

export default List;