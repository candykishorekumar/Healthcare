import "./Ophthalmology.css";
import Footer from "../Footer";
import Navbar from "../Navbar";


function Ophthalmology() {
  const doctors = [
    {
      name: "Dr. Priya Sharma",
      role: "Senior Ophthalmologist",
      experience: "12 years experience",
      image: "/images/doctor1.jpg",
      details: "Specialist in cataract surgery, eye infections, and vision correction."
    },
    {
      name: "Dr. Arjun Kumar",
      role: "Retina Specialist",
      experience: "10 years experience",
      image: "/images/doctor2.jpg",
      details: "Expert in diabetic eye care, retina disease, and glaucoma treatment."
    },
    {
      name: "Dr. Meera Nair",
      role: "Eye Surgeon",
      experience: "15 years experience",
      image: "/images/doctor3.jpg",
      details: "Specialist in laser eye surgery, cataract treatment, and dry eye care."
    }
  ];

  const services = [
    "Complete eye checkup",
    "Cataract treatment",
    "Glaucoma diagnosis",
    "Retina examination",
    "Dry eye treatment",
    "Diabetic eye care",
    "Eye infection treatment",
    "Vision correction"
  ];

  return (
    <>
    <Navbar />
    <div className="ophthalmology-page">
      <section className="ophthalmology-hero">
        <div>
          <h1>Ophthalmology Specialist</h1>
          <p>
            Ophthalmology is the medical department that focuses on eye care,
            vision problems, eye diseases, and eye surgeries. Our specialists
            provide complete diagnosis and treatment for patients with eye-related
            conditions.
          </p>

          <a href="/appointment" className="hero-btn">
            Book Appointment
          </a>
        </div>

        <img src="/images/eye-care.jpg" alt="Eye care" />
      </section>

      <section className="info-section">
        <h2>What is Ophthalmology?</h2>
        <p>
          Ophthalmology deals with the study and treatment of eye disorders.
          Ophthalmologists are medical doctors who treat problems like cataract,
          glaucoma, retina diseases, eye infections, dry eyes, blurred vision,
          and diabetic eye complications.
        </p>
      </section>

      <section className="services-section">
        <h2>Our Eye Care Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="symptoms-section">
        <h2>When should you visit an Ophthalmologist?</h2>

        <ul>
          <li>Blurred or double vision</li>
          <li>Eye pain or redness</li>
          <li>Frequent headache due to vision problem</li>
          <li>Watery or dry eyes</li>
          <li>Difficulty seeing at night</li>
          <li>Diabetes-related eye problems</li>
          <li>Sudden loss of vision</li>
        </ul>
      </section>

      <section className="doctor-section">
        <h2>Our Ophthalmology Doctors</h2>

        <div className="doctor-grid">
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <img src={doctor.image} alt={doctor.name} />

              <h3>{doctor.name}</h3>
              <h4>{doctor.role}</h4>
              <p className="experience">{doctor.experience}</p>
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

export default Ophthalmology;