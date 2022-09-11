
import {Routes,Route,Link} from "react-router-dom"
import Login from './components/Login';
import Practicetail from './components/practicetail';
import SignUp from "./components/SignUp";
import Admin from "./components/admin/Admin";
import Voters from "./components/voters/Voters";
import Officer from "./components/officer/Officer";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from './components/RequireAuth';
import Layout from "./components/Layout";
import Editcandidates from "./components/admin/Editcandidates";
import Editofficers from "./components/admin/Editofficers";
import Editvoters from "./components/admin/Editvoters";
function App() {
  const ROLES = {
    'v': "voter",
    'a': "sadmin",
    'o': "officer"
  }
  return (
    <div className="md:flex md:justify-center mb-6 bg-slate-800 h-screen">
      
      <Routes>
        <Route path ='/' element = {<Layout/>}>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/unauthorized' element = {<Unauthorized/>}></Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.a]} />}>
            <Route path='/admin' element = {<Admin/>}></Route>
            <Route path='/editvoter' element = {<Editvoters/>}></Route>
            <Route path='/editcandidate' element = {<Editcandidates/>}></Route>
            <Route path='/editofficer' element = {<Editofficers/>}></Route>
            <Route path='/signup' element = {<SignUp/>}></Route>
          </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.v]} />}>
            <Route path='/voter' element = {<Voters/>}></Route>
          </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.o]} />}>
            <Route path='/officer' element = {<Officer/>}></Route>
          </Route>

          
        </Route>
      </Routes>

      
    </div>
  );
}

export default App;
