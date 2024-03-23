import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
import ViewEmployee from './ViewEmployee';


function Home(props) {
  const [employees,setEmployees]=useState([]);
  const {id} =useParams()

  useEffect(()=>{
    loadEmployees();
  });
   const loadEmployees = async () =>{
    const result =await axios.get("http://localhost:8080/getEmployees");
    setEmployees(result.data);
  }
   const deleteEmployee=async (id) =>{
     await axios.delete(`http://localhost:8080/delete/${id}`)
    loadEmployees();
   }

    return (
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      employees.map((employee,index)=>(
        <tr key={employee.id}>
        <th scope="row">{employee.id}</th>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.email}</td>
        <td>
        <Link className="btn btn-primary mx-2"
        to={`/ViewEmployee/${employee.id}`}>view</Link>
        <Link className="btn btn-outline-primary mx-2" 
        to={`/editEmployee/${employee.id}`}>Edit</Link>
        <button className="btn btn-danger mx-2"
          onClick={() => deleteEmployee(employee.id)}
        >Delete</button>
        </td>
      </tr>
      ))
    }
   
  
  </tbody>
</table>
            </div>
        </div>
    );
}

export default Home;