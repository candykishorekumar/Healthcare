import { useState } from "react";
import "./Appointment.css";

function Appointment() {
  const emptyForm = {
    FullName: "",
    Age: "",
    MobileNumber: "",
    Address: "",
    Mail: "",
    Specialist: "",
    DoctorName: "",
    Date: "",
    Time: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveTocalendar = async () => {
    const calendarData = {
      title: "Appointment",
      patientName: formData.FullName,
      doctorName: formData.DoctorName,
      specialist: formData.Specialist,
      appointmentDate: formData.Date,
      appointmentTime: formData.Time,
      mobileNumber: formData.MobileNumber,
      status: "Booked",
    };

    const response = await fetch("http://localhost:8000/api/calendar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(calendarData),
    });

    const result = await response.json();
    console.log("calendar response:", result);

    if (!response.ok) {
      throw new Error(result.detail || "calendar save failed");
    }

    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending appointment:", formData);

      const response = await fetch("http://localhost:8000/booking-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Appointment response:", result);

      if (!response.ok) {
        alert(result.detail || "Appointment booking failed");
        return;
      }

      await saveTocalendar();

      localStorage.setItem("appointmentDate", formData.Date);
      localStorage.setItem("bookedAppointment", JSON.stringify(formData));

      alert("Appointment booked successfully");
      setFormData(emptyForm);
    } catch (error) {
      console.log("Booking error:", error);
      alert("Booking failed. Check backend terminal and browser console.");
    }
  };

  return (
    <div className="appointment-page">
      <div className="appointment-card">
        <h2>BOOK APPOINTMENT</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="FullName" placeholder="Full Name" value={formData.FullName} onChange={handleChange} required />
          <input type="number" name="Age" placeholder="Age" value={formData.Age} onChange={handleChange} required />
          <input type="tel" name="MobileNumber" placeholder="Mobile Number" value={formData.MobileNumber} onChange={handleChange} required />
          <input type="email" name="Mail" placeholder="Email" value={formData.Mail} onChange={handleChange} required />

          <textarea name="Address" placeholder="Address" value={formData.Address} onChange={handleChange} required />

          <select name="Specialist" value={formData.Specialist} onChange={handleChange} required>
            <option value="">Select Specialist</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopaedics">Orthopaedics</option>
            <option value="Ophthalmology">Ophthalmology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="General Medicine">General Medicine</option>
          </select>

          <input type="text" name="DoctorName" placeholder="Doctor Name" value={formData.DoctorName} onChange={handleChange} required />
          <input type="date" name="Date" value={formData.Date} onChange={handleChange} required />
          <input type="time" name="Time" value={formData.Time} onChange={handleChange} required />

          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;