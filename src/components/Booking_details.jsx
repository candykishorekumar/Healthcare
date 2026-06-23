import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Booking_details.css";

function Booking_details() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointments, setSelectedAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/calendar");
      const data = await response.json();

      console.log("Calendar data:", data);

      if (Array.isArray(data)) {
        setAppointments(data);
      } else {
        setAppointments([]);
      }
    } catch (error) {
      console.log("Calendar fetch error:", error);
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
    <div className="calendar">
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

        <div className="booking-info-box">
          {selectedAppointments.length > 0 ? (
            <>
              <h3>Appointment Booking Details</h3>

              {selectedAppointments.map((appointment) => (
                <div className="appointment-card" key={appointment.id}>
                  <p><b>Name:</b> {appointment.patientName}</p>
                  <p><b>Specialist:</b> {appointment.specialist}</p>
                  <p><b>Doctor:</b> {appointment.doctorName}</p>
                  <p><b>Date:</b> {appointment.appointmentDate}</p>
                  <p><b>Time:</b> {appointment.appointmentTime}</p>
                  <p><b>Mobile:</b> {appointment.mobileNumber}</p>
                  <p><b>Status:</b> {appointment.status}</p>
                </div>
              ))}
            </>
          ) : (
            <h3>No appointment for selected date</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Booking_details;