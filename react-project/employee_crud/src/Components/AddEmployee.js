import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function AddEmployee() {
    let navigate=useNavigate();
  const [employee,setEmployee]=useState({
    firstName:"",
    lastName:"",
    email:""
  })

  const {firstName,lastName,email}=employee
  const onInputChange=(e)=>{
        setEmployee({...employee, [e.target.name]: e.target.value})
        
  };

  const onSubmit =async (e)=>{
      e.preventDefault();
      await axios.post("http://localhost:8080/addEmployee",employee)
      navigate("/");
  };
  return (
    <div className="container">
        <div className="row">
           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              <h2 className="text-center m-4">Register Employee</h2>
              <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                  <label htmlFor="FirstName" className="form-label">First Name</label>
                  <input type={"text"} className="form-control"
                    placeholder="Enter your FirstName" name="firstName"
                    value={firstName} 
                    onChange={onInputChange}/>
              </div>
              <div className="mb-3">
                  <label htmlFor="LastName" className="form-label">Last Name</label>
                  <input type={"text"} className="form-control"
                    placeholder="Enter your LastName" name="lastName"
                    value={lastName}
                    onChange={onInputChange} />
              </div>
              <div className="mb-3">
                  <label htmlFor="Email" className="form-label">Email</label>
                  <input type={"text"} className="form-control"
                    placeholder="Enter your Email" name="email" 
                    value={email}
                    onChange={onInputChange}/>
              </div>
              <button type="submit" className="btn btn-outline-primary" >Submit</button>
              <button type="button" className="btn btn-outline-danger mx-2" >Cancel</button>
              </form>
            </div>
        </div>
    </div>
  )
}
