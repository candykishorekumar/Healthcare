import "../App.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Piechart from "./Piechart";
import Barchart from "./Barchart";
import Footer from "./Footer";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointments, setSelectedAppointments] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    fetchAppointments();

    return () => clearInterval(timer);
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/calendar");
      const data = await response.json();

      setAppointments(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log("Calendar error:", error);
      setAppointments([]);
    }
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateClick = (date) => {
    const clickedDate = formatDate(date);

    const filtered = appointments.filter(
      (appointment) => appointment.appointmentDate === clickedDate
    );

    setSelectedAppointments(filtered);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>

          <h2 className="company-name">Health Care</h2>

          <input type="text" placeholder="Search..." className="search" />

          <a href="/Appointment" className="card-middle">
            BOOK APPOINTMENT
          </a>

          <a href="/Login" className="admin">
            Admin
          </a>
        </div>

        <div className="datetime">
          {currentDateTime.toLocaleDateString()}{" "}
          {currentDateTime.toLocaleTimeString()}
        </div>
      </nav>

      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <ul>
          <li><a href="/orthopaedics" className="side">Orthopaedics</a></li>
          <li><a href="/ophthalmology" className="side">Ophthalmology</a></li>
          <li><a href="/neurology" className="side">Neurology</a></li>
          <li><a href="/cardiology" className="side">Cardiology</a></li>
          <li><a href="/pediatrics" className="side">Pediatrics</a></li>
          <li><a href="/medical" className="side">Medical</a></li>
        </ul>
      </div>

      <br />

      <div className="q">
        <h3 className="d">NORMAL HUMAN DETAILS</h3>
        <h3 className="f">BOOKED DETAILS</h3>
      </div>

      <div className="human-image-container"></div>

      <div className="cards-calendar-row">
        <div className="dashboard-cards">
          <div className="card"><h3>Blood Pressure</h3><p>120/80 mmHg</p></div>
          <div className="card"><h3>Heart Rate</h3><p>72 BPM</p></div>
          <div className="card"><h3>Oxygen Level</h3><p>98%</p></div>
          <div className="card"><h3>Body Temperature</h3><p>36.8°C</p></div>
          <div className="card"><h3>Respiration Rate</h3><p>16/min</p></div>
          <div className="card"><h3>Blood Sugar</h3><p>95 mg/dL</p></div>
        </div>

        <div className="dashboard-calendar">
          <h2>Appointment Calendar</h2>

          <div className="calendar-details-row">
            <Calendar
              onClickDay={handleDateClick}
              tileClassName={({ date }) => {
                const calendarDate = formatDate(date);

                const hasAppointment = appointments.some(
                  (appointment) => appointment.appointmentDate === calendarDate
                );

                return hasAppointment ? "appointment-date" : null;
              }}
            />

            
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          backgroundColor: "#f1f3f8",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "450px",
            border: "1px solid white",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#0f172a",
          }}
        >
          <Piechart />
        </div>

        <div
          style={{
            flex: 1,
            height: "450px",
            border: "1px solid white",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#0f172a",
          }}
        >
          <Barchart />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;