import React from 'react'
import AdminNav from './Adminnavbar'
import Table from '../Table';
import {useState,useEffect} from 'react'
import axios from "axios"
function Editcandidates() {
    const [candidates, setcandidates] = useState([]);
    useEffect(() => {
     axios.get("http://localhost:3001/readcand").then((response)=>{
         setcandidates(response.data);
 
     })
     
    }, []);
  return (
    <div>
        <AdminNav/>
        <Table data= {candidates}/>
        </div>
  )
}

export default Editcandidates