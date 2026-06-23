import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addtocart.css";

function Addtocart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const goToCustomerpage = () => {
    localStorage.setItem("orderItems", JSON.stringify(cart));
    localStorage.setItem("orderTotal", totalPrice);
    navigate("/Customerpage");
  };

  return (
    <div className="cart-page">
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <h2 className="empty-cart">Your cart is empty</h2>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item, index) => (
              <div className="cart-card" key={index}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>{item.details}</p>
                  <h4>₹{item.price}</h4>
                </div>

                <button onClick={() => removeItem(index)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total Amount: ₹{totalPrice}</h2>
            <button onClick={clearCart}>Clear Cart</button>
          </div>

          <button className="b" onClick={goToCustomerpage}>
            Buy Now
          </button>
        </>
      )}
    </div>
  );
}

export default Addtocart;