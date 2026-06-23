import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Ophthalmology = lazy(() => import("./components/specialistPage/Ophthalmology"));
const Orthopaedics = lazy(() => import("./components/specialistPage/Orthopaedics"));
const Neurology = lazy(() => import("./components/specialistPage/Neurology"));
const Cardiology = lazy(() => import("./components/specialistPage/Cardiology"));
const Pediatrics = lazy(() => import("./components/specialistPage/pediatrics"));
const Appointment = lazy(() => import("./components/Appointment"));
const Medical = lazy(() => import("./components/specialistPage/Medical"));
const Navbar = lazy(() => import("./components/Navbar"));
const Addtocart = lazy(() => import("./components/Addtocart"));
const Buynow = lazy(() => import("./components/Buynow"));
const Customerpage = lazy(() => import("./components/Customerpage"));
const Orderplaced = lazy(() => import("./components/Orderplaced"));
const Adminpanel = lazy(() => import("./components/Admin"));
const Login = lazy(() => import("./components/Login"));
const Booking_details = lazy(() => import("./components/Booking_details"));
const PiechartPage = lazy(() => import("./components/Piechart"));
const BarchartPage = lazy(() => import("./components/Barchart"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/PieChart" element={<PiechartPage />} />
            <Route path="/BarChart" element={<BarchartPage />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/ophthalmology" element={<Ophthalmology />} />
            <Route path="/orthopaedics" element={<Orthopaedics />} />
            <Route path="/neurology" element={<Neurology />} />
            <Route path="/cardiology" element={<Cardiology />} />
            <Route path="/pediatrics" element={<Pediatrics />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Addtocart" element={<Addtocart />} />
            <Route path="/Buynow" element={<Buynow />} />
            <Route path="/Customerpage" element={<Customerpage />} />
            <Route path="/Orderplaced" element={<Orderplaced />} />
            <Route path="/Admin" element={<Adminpanel />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Booking_details" element={<Booking_details />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}




export default App;