
import {Routes,Route,Link} from "react-router-dom"
import Login from './components/Login';
import Practicetail from './components/practicetail';
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="md:flex md:justify-center mb-6 bg-slate-800 h-screen">
      
      <Routes>
        <Route path='/' element = {<Login/>}></Route>
        <Route path='/signup' element = {<SignUp/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
