import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateCustomer() {
    const params = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        ComplaintID: "",
        CustomerName: "",
        Description: "",
        Status:"",
        Date:""
    });

    const handleSubmit = (e) => {
      e.preventDefault();
        fetch("http://localhost:3003/" + params.ComplaintID, {
         
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
              "Content-Type":"application/json"
            }
        })
            .then(() => {
                navigate("/customers");
            })
          
    }

   


    useEffect(() => {
        fetch("http://localhost:3003/" + params.ComplaintID)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res);
                setData(res);
            })
    }, []);

    return (
        <>
        <h1 className='text-center mt-3'>Edit Complaint</h1>
          <form class="row g-3" onSubmit={handleSubmit}>
            <div class="col-md-12">
              <label for="inputEmail4" class="form-label">Add ComplaintID</label>
              <input type="text" class="form-control" id="inputEmail4" value={data.ComplaintID} onChange={(e)=>{
               setData({...data,ComplaintID : e.target.value});
              }}/>
            </div>  
            <div class="col-12">
              <label for="inputAddress" class="form-label">Add CustomerName</label>
              <input type="text" class="form-control" id="inputAddress"  value={data.CustomerName} onChange={(e)=>{
                setData({...data,CustomerName : e.target.value});
              }} />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Add Description about Complaint</label>
              <input type="text" class="form-control" id="inputAddress2"  value={data.Description}  onChange={(e)=>{
                 setData({...data,Description : e.target.value});
              }} />
            </div>
            <div class="col-md-12">
              <label for="inputCity" class="form-label">Add Date</label>
              <input type="date" class="form-control" id="inputCity" value={data.Date} onChange={(e)=>{
                 setData({...data,Date : e.target.value});
              }} />
            </div>
            <div class="col-md-12">
              <label for="inputCity" class="form-label">Add Status</label>
              <input type="text" class="form-control" id="inputCity" value={data.Status} onChange={(e)=>{
                 setData({...data,Status : e.target.value});
              }} />
            </div>
     
            <div class="col-12">
              <button type="submit"  style={{ marginLeft : '480px' }}class="btn btn-primary">Add</button>
            </div>
          </form>
        </>
    )

}