
import {Routes,Route,Link} from "react-router-dom"
import Login from './components/Login';
import Practicetail from './components/practicetail';
function App() {
  return (
    <div className="flex justify-center">
      
      <Routes>
        <Route path='/' element = {<Login/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
