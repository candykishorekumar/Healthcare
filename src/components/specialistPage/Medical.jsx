import { useState, useEffect } from "react";
import "./Medical.css";
import Navbar from "../Navbar";

function Medical() {
  const [search, setSearch] = useState("");
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();

      setMedicines(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
      setMedicines([]);
    }
  };

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name?.toLowerCase().includes(search.toLowerCase())
  );

  function addToCart(medicine) {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

    oldCart.push({
      id: medicine._id,
      name: medicine.name,
      price: Number(medicine.price),
      image: medicine.image,
      details: medicine.description,
    });

    localStorage.setItem("cart", JSON.stringify(oldCart));

    alert("Medicine added to cart");
  }

  return (
    <>
      <Navbar />

      <div className="medical-page">
        <div className="medicine-search-box">
          <input
            type="text"
            placeholder="Search medicine..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <h1>Medical Store</h1>
        <p>Buy medicines and healthcare products online.</p>

        <div className="medicine-grid">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((medicine) => (
              <div className="medicine-card" key={medicine._id}>
                <img src={medicine.image} alt={medicine.name} />

                <h3>{medicine.name}</h3>
                <p>{medicine.description}</p>
                <h4>₹{medicine.price}</h4>

                <button onClick={() => addToCart(medicine)}>
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <h2>No medicines found</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default Medical;