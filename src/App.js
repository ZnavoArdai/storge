import logo from './logo.svg';
import './App.css';
import Welcome from './home.component';
import Employee from './employe.component';
import Employes from './employes.component';
import Empoloyeeimg from './employeimg.component';
import List from './listofemployes.component';

function App() {
  return (
<>
<Welcome name="znavo"/>
<Employee fname="avi" lname="meko" birthday="31/45/12" pic="logo192.png"/>
<Employes/>
<div>
<Empoloyeeimg url="./logo192.png"/>
<List/>
</div>
</>
  );
}

export default App;
