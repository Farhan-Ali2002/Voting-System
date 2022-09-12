import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

export default function MyModal({visible, onClose, cnic}) {
     const [voterData, setvoterData] = useState({fname: "",lname:"",cnic: "",username: "",constituency:""});
     useEffect(() => {
        const getvoterdata = async () =>{

            console.log("cnic:", cnic)
           const response = await axios.get(`http://localhost:3001/getvoter/${cnic}`)
            console.log("response ", response.data[0])
            setvoterData(response.data[0]);
            console.log("myvoter = " ,voterData)
         }
         getvoterdata();
        
        
        ;
     }, []);
    
 if(!visible)
 return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-102">
      <button className="relative right-0 top-0" onClick={onClose}>X</button>
        <h1 className="font-semibold text-center text-xl text-gray-700">
          Welcome back
        </h1>
        <form>
        
        <p className="text-center text-gray-700 mb-5">Edit Voter</p>
        
        <div className="flex flex-col">
        <div className="flex space-x-1.5">
        <div>
        <label className="block" htmlFor="name">Name</label>
          <input
          onChange={e => setvoterData({...voterData, fname: e.target.value})}
           value={voterData.fname}
            id = "name"
            type="text"
            className="border border-gray-700 p-2 rounded mb-5 w-22"
            placeholder="email@example.com"
          />
          </div>
          <div>
          <label className = "block" htmlFor="username">Username</label>
          <input
          onChange={e => setvoterData({...voterData, username: e.target.value})}
          value={voterData.username}
            id = "username"
            type="text"
            className="border border-gray-700 p-2 rounded mb-5 w-{30rem}"
            placeholder="********"
          />
          </div>
        </div>
        <div className="flex space-x-1.5">
        <div className ="">
        <label className = "block" htmlFor="cnic">CNIC</label>
          <input
          onChange={e => setvoterData({...voterData, cnic: e.target.value})}
          value={voterData.cnic}
            id = "cnic"
            type="text"
            className="border border-gray-700 p-2 rounded mb-5 w-22"
            placeholder="email@example.com"
          />
          </div>
          <div>
          <label className="block" htmlFor="constituency">Constituency</label>
          <input
          onChange={e => setvoterData({...voterData, constituency: e.target.value})}
          value={voterData.lname}
           id = "constituency"
            type="text"
            className="border border-gray-700 p-2 rounded mb-5 w-{30rem}"
            placeholder="********"
          />
          </div>
          
        </div>
        </div>
        <div className="text-center">
          <button  className="px-5 py-2 bg-gray-700 text-white rounded">
            Edit
          </button>
          
        </div>
        </form>
      </div>
  
    </div>
  
  );
}