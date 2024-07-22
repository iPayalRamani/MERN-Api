import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3003/customers")
      .then((res) => res.json())
      .then((res) => {
        setCustomers(res);
      });
  }, []);

  const formatedCustomeres = customers.map((cust) => {
    return (
      <>
        
        <Link to={"../customer/" + cust.ComplaintID}>
          <h4>{cust.CustomerName}</h4>
        </Link>
      </>
    );
  });
  return formatedCustomeres;


}

export default Customers;
