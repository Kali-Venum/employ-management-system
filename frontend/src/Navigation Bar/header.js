import { Link } from "react-router-dom"
import  '.././App.css'
export const NavBar = () => {
  const handleLout = ()=>{
    localStorage.removeItem("token");
  }
return (
    <div className="navbarCustom">
      <button className="Logout" onClick={handleLout}><Link className="btn btn-light btn-outline-primary LogoutLink" to="/">logout <span><i className="fa-sharp fa-solid fa-right-from-bracket"  style={{ fontSize: "17px" }}></i></span></Link></button>
       <nav className="navbar  navbar-expand-sm navbar-dark bg-light text-uppercase "
       >
        <div className="container-fluid " >
            <ul className="navbar-nav ms-5 mt-2">
              <li className="nav-item">
                
              </li>
              <li className="nav-item">
                <Link className="btn btn-light btn-outline-primary" to="/department">Department</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-light btn-outline-primary" to="/employee">Employee</Link>
               </li>
            </ul>
          </div>
      </nav>
        <h1 style={{textAlign:"center", marginTop: "20px"}}>Employee Management System</h1>
    </div>
)
}