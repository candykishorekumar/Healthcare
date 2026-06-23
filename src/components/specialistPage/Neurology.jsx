import "./Neurology.css";
import Footer from "../Footer";
import Navbar from "../Navbar";


function Neurology() {
  const doctors = [
    {
      name: "Dr. Sanjay Rao",
      role: "Senior Neurologist",
      experience: "15 years experience",
      image: "/images/neuro-doctor1.jpg",
      details: "Specialist in headache, epilepsy, stroke, and nerve disorders."
    },
    {
      name: "Dr. Kavitha Menon",
      role: "Brain & Stroke Specialist",
      experience: "13 years experience",
      image: "/images/neuro-doctor2.jpg",
      details: "Expert in stroke care, brain disorders, migraine, and memory problems."
    },
    {
      name: "Dr. Arvind Kumar",
      role: "Neuro Physician",
      experience: "10 years experience",
      image: "/images/neuro-doctor3.jpg",
      details: "Specialist in nerve pain, paralysis, seizures, and movement disorders."
    }
  ];

  const services = [
    "Stroke treatment",
    "Migraine care",
    "Epilepsy treatment",
    "Nerve disorder care",
    "Memory problem evaluation",
    "Paralysis treatment",
    "Brain infection care",
    "Movement disorder treatment"
  ];

  return (
    <>
    <Navbar />
    <div className="neurology-page">
      <section className="neurology-hero">
        <div>
          <h1>Neurology Specialist</h1>
          <p>
            Neurology is the medical department that focuses on the brain,
            spinal cord, nerves, and nervous system. Our neurologists diagnose
            and treat conditions like stroke, epilepsy, migraine, nerve pain,
            paralysis, and memory problems.
          </p>

          <a href="/appointment" className="neuro-hero-btn">
            Book Appointment
          </a>
        </div>

        <img src="/images/neurology-care.jpg" alt="Neurology care" />
      </section>

      <section className="neuro-info-section">
        <h2>What is Neurology?</h2>
        <p>
          Neurology deals with diseases and disorders of the nervous system.
          Neurologists help patients with brain, spinal cord, and nerve-related
          problems such as headaches, seizures, stroke, numbness, weakness,
          balance issues, and memory loss.
        </p>
      </section>

      <section className="neuro-services-section">
        <h2>Our Neurology Services</h2>

        <div className="neuro-services-grid">
          {services.map((service, index) => (
            <div className="neuro-service-card" key={index}>
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="neuro-symptoms-section">
        <h2>When should you visit a Neurologist?</h2>

        <ul>
          <li>Frequent headache or migraine</li>
          <li>Sudden weakness or paralysis</li>
          <li>Fits or seizures</li>
          <li>Numbness or tingling sensation</li>
          <li>Memory loss or confusion</li>
          <li>Difficulty walking or balancing</li>
          <li>Speech or vision problems</li>
        </ul>
      </section>

      <section className="neuro-doctor-section">
        <h2>Our Neurology Doctors</h2>

        <div className="neuro-doctor-grid">
          {doctors.map((doctor, index) => (
            <div className="neuro-doctor-card" key={index}>
              <img src={doctor.image} alt={doctor.name} />

              <h3>{doctor.name}</h3>
              <h4>{doctor.role}</h4>
              <p className="neuro-experience">{doctor.experience}</p>
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

export default Neurology;