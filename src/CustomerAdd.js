import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function CustomerAdd() {

  const [ComplaintID, setComplaintID] = useState("");
  const [CustomerName, setCustomerName] = useState("");
  const [Description, setDescription] = useState("");
  const [Status, setStatus] = useState("");
  const [Date, setDate] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3003/add", {
      // method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify({
      //   ComplaintID,
      //   CustomerName,
      //   Description,
      //   Status,
      //   Date,
        
      // }),

        ComplaintID: ComplaintID,
        CustomerName: CustomerName,
        Description: Description,
        Date: Date,
        Status: Status
       
    })
    .then(()=>{
      navigate('/customers')
    })
  };

  return (
    <>
    <h1 className='text-center mt-3'>Have An Complaint!</h1>
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">Add ComplaintID</label>
          <input type="text" class="form-control" id="inputEmail4" onChange={(e)=>{
            setComplaintID(e.target.value);
          }}/>
        </div>  
        <div class="col-12">
          <label for="inputAddress" class="form-label">Add CustomerName</label>
          <input type="text" class="form-control" id="inputAddress"  onChange={(e)=>{
            setCustomerName(e.target.value);
          }} />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Add Description about Complaint</label>
          <input type="text" class="form-control" id="inputAddress2"  onChange={(e)=>{
            setDescription(e.target.value);
          }} />
        </div>
        <div class="col-md-12">
          <label for="inputCity" class="form-label">Add Date</label>
          <input type="date" class="form-control" id="inputCity" onChange={(e)=>{
            setStatus(e.target.value);
          }} />
        </div>
        <div class="col-md-12">
          <label for="inputCity" class="form-label">Add Status</label>
          <input type="text" class="form-control" id="inputCity" onChange={(e)=>{
            setDate(e.target.value)
          }} />
        </div>
 
        <div class="col-12">
          <button type="submit"  style={{ marginLeft : '480px' }}class="btn btn-primary">Add</button>
        </div>
      </form>
    </>
  )



}