import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
                <Link to='/' className="nav-link text-dark">Home</Link>
              </li>
              <li className="nav-item">
              <Link to='/customers' className="nav-link text-dark">All Customers</Link>
              </li>
        <li className="nav-item">
             <Link to="./customer/add"  className="nav-link text-dark">Add Complaint</Link>
              </li>
              
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
        </>
    )
}