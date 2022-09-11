import React from 'react'
import AdminNav from './Adminnavbar'
import axios from "axios"
import {useState, useEffect} from "react"
import Table from '../Table'
function Editvoters() {
   const [voters, setvoters] = useState([]);
   useEffect(() => {
    axios.get("http://localhost:3001/readvoter").then((response)=>{
        setvoters(response.data);

    })
    
   }, []);
  return (
    <div>
        <AdminNav/>
        <Table data = {voters}/>
        </div>
        
  )
}

export default Editvoters