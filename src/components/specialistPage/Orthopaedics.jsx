import "./Orthopaedics.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
function Orthopaedics() {
  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Senior Orthopaedic Surgeon",
      experience: "14 years experience",
      image: "/images/ortho-doctor1.jpg",
      details: "Specialist in bone fractures, joint pain, arthritis, and knee replacement."
    },
    {
      name: "Dr. Anita Menon",
      role: "Joint Replacement Specialist",
      experience: "11 years experience",
      image: "/images/ortho-doctor2.jpg",
      details: "Expert in hip replacement, knee replacement, and sports injuries."
    },
    {
      name: "Dr. Vikram Singh",
      role: "Spine Specialist",
      experience: "16 years experience",
      image: "/images/ortho-doctor3.jpg",
      details: "Specialist in back pain, spine disorders, disc problems, and bone deformities."
    }
  ];

  const services = [
    "Bone fracture treatment",
    "Joint pain treatment",
    "Arthritis care",
    "Knee replacement",
    "Hip replacement",
    "Sports injury care",
    "Back pain treatment",
    "Spine disorder treatment"
  ];

  return (
    <>
    <Navbar />
    <div className="orthopaedics-page">
      <section className="orthopaedics-hero">
        <div>
          <h1>Orthopaedics Specialist</h1>
          <p>
            Orthopaedics is the medical department that focuses on bones,
            joints, muscles, ligaments, and spine-related problems. Our
            specialists provide treatment for fractures, joint pain, arthritis,
            sports injuries, and spine disorders.
          </p>

          <a href="/appointment" className="ortho-hero-btn">
            Book Appointment
          </a>
        </div>

        <img src="/images/orthopaedics-care.jpg" alt="Orthopaedics care" />
      </section>

      <section className="ortho-info-section">
        <h2>What is Orthopaedics?</h2>
        <p>
          Orthopaedics deals with the diagnosis, treatment, and prevention of
          problems related to bones, joints, muscles, ligaments, tendons, and
          spine. Orthopaedic doctors help patients recover from injuries,
          fractures, arthritis, back pain, and movement-related problems.
        </p>
      </section>

      <section className="ortho-services-section">
        <h2>Our Orthopaedic Services</h2>

        <div className="ortho-services-grid">
          {services.map((service, index) => (
            <div className="ortho-service-card" key={index}>
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="ortho-symptoms-section">
        <h2>When should you visit an Orthopaedic doctor?</h2>

        <ul>
          <li>Bone fracture or injury</li>
          <li>Joint pain or swelling</li>
          <li>Back pain or neck pain</li>
          <li>Knee pain while walking</li>
          <li>Shoulder pain or stiffness</li>
          <li>Sports injury</li>
          <li>Difficulty in movement</li>
        </ul>
      </section>

      <section className="ortho-doctor-section">
        <h2>Our Orthopaedics Doctors</h2>

        <div className="ortho-doctor-grid">
          {doctors.map((doctor, index) => (
            <div className="ortho-doctor-card" key={index}>
              <img src={doctor.image} alt={doctor.name} />

              <h3>{doctor.name}</h3>
              <h4>{doctor.role}</h4>
              <p className="ortho-experience">{doctor.experience}</p>
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

export default Orthopaedics;