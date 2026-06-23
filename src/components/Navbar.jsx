import { useState } from "react";
import "./Navbar.css";
import "./Dashboard"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
       
        

        <h2 className="nav-company-name">Health Care </h2>
         <div>
            <a className="v" href="/dashboard">Home</a>
        </div>

        <button
          className="nav-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        
      </nav>

      <div className={`sidebar1 ${isOpen ? "active" : ""}`}>
        <ul>
          <li><a href="/Addtocart" className="side">Cart</a></li>
         
        </ul>
      </div>
    </>
  );
}

export default Navbar;