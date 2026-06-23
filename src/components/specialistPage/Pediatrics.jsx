import "./Pediatrics.css";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Pediatrics() {
  const doctors = [
    {
      name: "Dr. Lakshmi Priya",
      role: "Senior Pediatrician",
      experience: "13 years experience",
      image: "/images/pedia-doctor1.jpg",
      details: "Specialist in child health, fever, infections, vaccination, and growth monitoring."
    },
    {
      name: "Dr. Karthik Raman",
      role: "Child Care Specialist",
      experience: "10 years experience",
      image: "/images/pedia-doctor2.jpg",
      details: "Expert in newborn care, nutrition guidance, allergies, and common child illnesses."
    },
    {
      name: "Dr. Anjali Nair",
      role: "Neonatal Specialist",
      experience: "12 years experience",
      image: "/images/pedia-doctor3.jpg",
      details: "Specialist in infant care, premature baby care, and child development problems."
    }
  ];

  const services = [
    "Child health checkup",
    "Vaccination",
    "Newborn care",
    "Fever treatment",
    "Growth monitoring",
    "Nutrition guidance",
    "Allergy treatment",
    "Child infection care"
  ];

  return (
   <>
    <Navbar/>
    <div className="pediatrics-page">
      <section className="pediatrics-hero">
        <div>
          <h1>Pediatrics Specialist</h1>
          <p>
            Pediatrics is the medical department that focuses on the health and
            treatment of babies, children, and teenagers. Our pediatricians
            provide care for fever, infections, vaccination, nutrition, growth,
            and child development.
          </p>

          <a href="/appointment" className="pedia-hero-btn">
            Book Appointment
          </a>
        </div>

        <img src="/images/pediatrics-care.jpg" alt="Pediatrics care" />
      </section>

      <section className="pedia-info-section">
        <h2>What is Pediatrics?</h2>
        <p>
          Pediatrics deals with the medical care of infants, children, and
          adolescents. Pediatric doctors help children stay healthy through
          regular checkups, vaccination, growth tracking, illness treatment, and
          nutrition advice.
        </p>
      </section>

      <section className="pedia-services-section">
        <h2>Our Pediatrics Services</h2>

        <div className="pedia-services-grid">
          {services.map((service, index) => (
            <div className="pedia-service-card" key={index}>
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="pedia-symptoms-section">
        <h2>When should you visit a Pediatrician?</h2>

        <ul>
          <li>Fever, cold, cough, or infection</li>
          <li>Vaccination schedule</li>
          <li>Newborn health checkup</li>
          <li>Poor appetite or nutrition issues</li>
          <li>Slow growth or weight concerns</li>
          <li>Skin allergy or breathing problems</li>
          <li>Child development concerns</li>
        </ul>
      </section>

      <section className="pedia-doctor-section">
        <h2>Our Pediatrics Doctors</h2>

        <div className="pedia-doctor-grid">
          {doctors.map((doctor, index) => (
            <div className="pedia-doctor-card" key={index}>
              <img src={doctor.image} alt={doctor.name} />

              <h3>{doctor.name}</h3>
              <h4>{doctor.role}</h4>
              <p className="pedia-experience">{doctor.experience}</p>
              <p>{doctor.details}</p>

              <button>Book Appointment</button>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
    </>
  );
}

export default Pediatrics;