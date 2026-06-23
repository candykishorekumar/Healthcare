import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Ophthalmology from "./components/specialistPage/Ophthalmology";
import Orthopaedics from "./components/specialistPage/Orthopaedics";
import Neurology from "./components/specialistPage/Neurology"
import Cardiology from "./components/specialistPage/Cardiology";
import Pediatrics from "./components/specialistPage/pediatrics";
import {PieChart} from "recharts";
import {BarChart} from "recharts";
import Footer from "./components/Footer";
import Appointment from "./components/Appointment";
import Medical from "./components/specialistPage/Medical";
import Navbar from "./components/Navbar";
import Addtocart from "./components/Addtocart";
import Buynow from "./components/Buynow";
import Customerpage from "./components/Customerpage";
import Orderplaced from "./components/Orderplaced";
import Adminpanel from "./components/Admin";
import Login from "./components/Login";
import Booking_details from "./components/Booking_details"



function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Dashboard'  element={<Dashboard/>}> </Route>
          <Route path='/PieChart'  element={<PieChart/>}> </Route>
          <Route path='/BarChart'  element={<BarChart/>}> </Route>
          <Route path='/Footer'  element={<Footer/>}> </Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ophthalmology" element={<Ophthalmology />} />
          <Route path="/orthopaedics" element={<Orthopaedics />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/pediatrics" element={<Pediatrics />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/ophthalmology" element={<Ophthalmology />} />
          <Route path="/orthopaedics" element={<Orthopaedics />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/pediatrics" element={<Pediatrics />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/Navbar" element={<Navbar />} /> 
          <Route path="/Addtocart" element={<Addtocart />} />
           <Route path="/Buynow" element={<Buynow />} />
           <Route path="/Addtocart" element={<Addtocart />} />
          <Route path="/Customerpage" element={<Customerpage />} />
          <Route path="/Orderplaced" element={<Orderplaced />} />
          <Route path="/Admin" element={<Adminpanel />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Booking_details" element={<Booking_details />} />
         </Routes>
      </BrowserRouter>
      </div>
   
  );
}




export default App;