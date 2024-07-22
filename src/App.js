import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Customers from './Customers';
import CustomerDetail from './CustomerDetail';
import CustomerAdd from './CustomerAdd';
import UpdateCustomer from './UpadateCustomer';

function App() {
  return (
  <>

  <BrowserRouter>
    <Routes>

    <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/customers" element={<Customers />} />
    <Route path="/customer/:ComplaintID" element={<CustomerDetail />} />
    <Route path="/customer/add" element={<CustomerAdd />} /> 
    <Route path="/customer/edit/:ComplaintID" element={<UpdateCustomer />} />
    </Route>
    </Routes>
  </BrowserRouter>


  </>
  );
}

export default App;
