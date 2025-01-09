
import { TbEdit } from "react-icons/tb";
import { Navbar } from "./Navbar";
import "./css/Employee_details.css";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: string,
  name: string,
      email:string,
      address: string,
      phone_number: string,
      emergency_phone_number: string,
      doj: string,
      dob: string,
      role:string,
      department: string
}
export const Employee_details = () => {
  const url="http://localhost:3000/";
  
const[data,setData]=useState<User[]>([]);
  useEffect(()=>{
    axios.get(url+'employeeDetail')
    .then(res=>
        setData(res.data)
    )
    .catch(err=>console.log(err))
})
function handleDelete(id: string){
  if(confirm("this item going to delete on this page")){
axios.delete(url+'employeeDetail/'+`${id}`).then(
  res=>{console.log(res.status)
    
    // window.location.reload();
    // setData(res.data)
  }
)}
}

  return (
    <>
      <div className="emp-container">
        
          <Navbar />
        
        <div className="emp-detail">
        <div className="emp-title">Employee Details</div>
          <div className="newRecord">
            <Link to={""}><button className="newRecordButton">+ Add New Employee</button></Link>
          </div>
          <table>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Joining Date</th>
              <th>Role</th>
              <th>Action</th>
            </tr>

            {data.map((datas,index)=>(

<tr><td key={index}>{index+1}</td>
              <td>{datas.name}</td>
              <td>{datas.email}</td>
              <td>{datas.address}</td>
              <td>{datas.phone_number}</td>
              <td>{datas.doj}</td>
              <td>{datas.role}</td>
              <td><button className="recordEdit" ><TbEdit /></button><button className="recordDelete" onClick={()=>handleDelete(datas.id)}><MdDelete /></button></td>
              </tr>
))}

           
              {/* <td>1</td>
              <td>Naveen</td>
              <td>naveen@gamil.com</td>
              <td>abc</td>
              <td>7200434524</td>
              <td>01-07-2024</td>
              <td>software developer</td>
              <td><button className="recordEdit"><TbEdit /></button><button className="recordDelete"><MdDelete /></button></td>
             */}
            
          </table>

        </div>
      </div>
    </>
  );
};
