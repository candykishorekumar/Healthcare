import "./Cardiology.css";
import Footer from "../Footer";
import Navbar from "../Navbar";


function Cardiology() {
  const doctors = [
    {
      name: "Dr. Ramesh Babu",
      role: "Senior Cardiologist",
      experience: "18 years experience",
      image: "/images/cardio-doctor1.jpg",
      details: "Specialist in heart disease, chest pain, high blood pressure, and heart checkups."
    },
    {
      name: "Dr. Sneha Iyer",
      role: "Interventional Cardiologist",
      experience: "14 years experience",
      image: "/images/cardio-doctor2.jpg",
      details: "Expert in angioplasty, heart blockage treatment, ECG, and cardiac care."
    },
    {
      name: "Dr. Manoj Krishnan",
      role: "Heart Specialist",
      experience: "12 years experience",
      image: "/images/cardio-doctor3.jpg",
      details: "Specialist in heart rhythm problems, cholesterol management, and preventive heart care."
    }
  ];

  const services = [
    "Heart checkup",
    "ECG test",
    "Chest pain treatment",
    "High BP management",
    "Cholesterol care",
    "Heart rhythm treatment",
    "Angioplasty support",
    "Preventive heart care"
  ];

  return (
    
  <>
  <Navbar />

    <div className="cardiology-page">
      
      <section className="cardiology-hero">
        <div>
          <h1>Cardiology Specialist</h1>
          <p>
            Cardiology is the medical department that focuses on heart and blood
            vessel-related problems. Our cardiologists diagnose and treat heart
            disease, chest pain, high blood pressure, heart rhythm problems, and
            other cardiac conditions.
          </p>

          <a href="/appointment" className="cardio-hero-btn">
            Book Appointment
          </a>
        </div>

        <img src="/images/cardiology-care.jpg" alt="Cardiology care" />
      </section>

      <section className="cardio-info-section">
        <h2>What is Cardiology?</h2>
        <p>
          Cardiology deals with the diagnosis, treatment, and prevention of
          diseases related to the heart and circulatory system. Cardiologists
          help patients with heart pain, high blood pressure, heart attack risk,
          cholesterol issues, and irregular heartbeat.
        </p>
      </section>

      <section className="cardio-services-section">
        <h2>Our Cardiology Services</h2>

        <div className="cardio-services-grid">
          {services.map((service, index) => (
            <div className="cardio-service-card" key={index}>
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="cardio-symptoms-section">
        <h2>When should you visit a Cardiologist?</h2>

        <ul>
          <li>Chest pain or discomfort</li>
          <li>Shortness of breath</li>
          <li>High blood pressure</li>
          <li>Fast or irregular heartbeat</li>
          <li>Dizziness or fainting</li>
          <li>High cholesterol</li>
          <li>Family history of heart disease</li>
        </ul>
      </section>

      <section className="cardio-doctor-section">
        <h2>Our Cardiology Doctors</h2>

        <div className="cardio-doctor-grid">
          {doctors.map((doctor, index) => (
            <div className="cardio-doctor-card" key={index}>
              <img src={doctor.image} alt={doctor.name} />

              <h3>{doctor.name}</h3>
              <h4>{doctor.role}</h4>
              <p className="cardio-experience">{doctor.experience}</p>
              <p>{doctor.details}</p>

              <button>Book Appointment</button>
            </div>
          ))}
        </div>
        
      </section>
      
      <Footer />
    </div>
     </>
         
  );
  
}
  

export default Cardiology;