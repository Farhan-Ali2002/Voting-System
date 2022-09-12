import {React,useState} from "react";
import MyModal from "./Modal";
import axios from "axios";
export default function Table(data) {
    const [showModal,setshowModal] = useState(false)
    const [cnic,setcnic] = useState("");
    const handleonclose = ()=>{
        setshowModal(false)
    }
    const getvoterdata = async (cnic) =>{
        setcnic(cnic)
        console.log("cnic:", cnic)
        setshowModal(true)
     }
    
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        CNIC
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Username
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Constituency
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {
                                data.data.map((user)=>{
                                return(
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                                        {`${user.fname} ` + `${user.lname}`}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                                        
                                        {user.cnic}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                                        {user.username}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                                        {user.lname}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <button className ="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded " type="submit"
                                    onClick={()=>getvoterdata(user.cnic)}>
                                        Edit
                                    </button>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <button className ="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">
                                        Delete
                                    </button>
                                    </td>
                                </tr>
)})}
                            </tbody>

                        </table>
                        {(showModal)?(
                        <MyModal onClose = {handleonclose} visible = {showModal} cnic = {cnic}></MyModal>):(
                            <></>
                        )
}
                    </div>
                </div>
            </div>
        </div>
    );
}