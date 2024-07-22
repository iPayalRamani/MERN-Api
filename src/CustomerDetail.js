import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomerDetail(){
    const params = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({});
    useEffect(() => {
      fetch(
        "http://localhost:3003/" + params.ComplaintID,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((res) => {
            setCustomer(res);
        });
    }, []);


    return(
        <>
       <div class="card text-center">
            <div class="card-header">
               Complaint Details
            </div>
            <div class="card-body">
                <h5 class="card-title">ComplaintID : {customer.ComplaintID} </h5>
                <hr/>
                <h4>Name : {customer.CustomerName}</h4>
                <hr/>

                <h5 class="card-text"> Desc :  {customer.Description}</h5>

                <hr/>

                <h4>Status : {customer.Status}</h4>
                <hr/>
            
                <button
                 type="button"
                 class="btn btn-primary"
                 onClick={() => {
                    navigate("/customer/edit/" + params.ComplaintID);
                  }}
                >Edit</button>
                
                &nbsp; &nbsp; &nbsp;
                <button
                 type="button"
                 class="btn btn-danger"
                 onClick={() => {
                    fetch(
                      "http://localhost:3003/" +
                        params.ComplaintID,
                      {
                        method: "DELETE",
                      }
                    ).then((res) => {
                      navigate("/customers");
                    });
                }}
                >Delete</button>
            </div>
            <div class="card-footer text-body-secondary">
                2 days ago
            </div>
     </div>
        
        </>


    );
}