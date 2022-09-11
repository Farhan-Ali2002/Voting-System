import React from 'react'
import AdminNav from './Adminnavbar'
import Table from '../Table';
import {useState,useEffect} from 'react'
import axios from "axios"
function Editofficers() {
    const [officers, setofficers] = useState([]);
    useEffect(() => {
     axios.get("http://localhost:3001/readoff").then((response)=>{
         setofficers(response.data);
 
     })
     
    }, []);
  return (
    <div>
        <AdminNav/>
        <Table data = {officers}/>
        </div>
  )
}

export default Editofficers