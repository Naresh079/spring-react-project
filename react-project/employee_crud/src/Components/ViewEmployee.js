import React,{useEffect,useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import axios from 'axios';

export default function ViewEmployee() {

    const [employee,setEmployee]=useState({
        firstName:"",
        lastName:"",
        emial:""
    })

    const  {id} =useParams();

    useEffect(()=>{
        loadEmployee();
    },[])

    const loadEmployee = async () =>{
        const result =await axios.get(`http://localhost:8080/Employee/${id}`)
        setEmployee(result.data);
    }
  return (
    <div className="container">
    <div className="row">
       <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Employee</h2>

          <div className="card">
                <div className="card-header">
                    Details of user id :
                    <ul className ="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>FirstName:</b>
                            {employee.firstName}
                        </li>
                        <li className="list-group-item">
                            <b>LastName:</b>
                            {employee.lastName}
                        </li>
                        <li className="list-group-item">
                            <b>Email:</b>
                            {employee.email}
                        </li>
                    </ul>
                </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
    </div>   
    </div>
    </div>  
  )
}
