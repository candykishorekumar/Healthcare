import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Customer.css";

function Customerpage() {
  const navigate = useNavigate();

  const [orderData, setOrderData] = useState({
    name: "",
    mobile: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const cart = JSON.parse(localStorage.getItem("orderItems")) || [];
  const totalPrice = Number(localStorage.getItem("orderTotal")) || 0;

  const handleChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  const validateDetails = () => {
    if (!orderData.name || !orderData.mobile || !orderData.address) {
      alert("Please fill all customer details");
      return false;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return false;
    }

    return true;
  };

  const cashOnDelivery = () => {
    if (!validateDetails()) return;

    const order = {
      order_key: "COD-" + Date.now(),
      name: orderData.name,
      mobile: orderData.mobile,
      address: orderData.address,
      paymentMethod: "Cash on Delivery",
      paymentStatus: "Pending",
      paymentId: "",
      items: cart,
      totalAmount: totalPrice,
      status: "Confirmed",
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));

    localStorage.removeItem("cart");
    localStorage.removeItem("orderItems");
    localStorage.removeItem("orderTotal");

    navigate("/orderplaced");
  };

  const buyNow = async () => {
    if (!validateDetails()) return;

    try {
      const response = await fetch("http://localhost:8000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalPrice,
        }),
      });

      const data = await response.json();

      const options = {
        key: data.key,
        amount: data.order.amount,
        currency: "INR",
        name: "Health Care",
        description: "Medicine Purchase",
        order_id: data.order.id,

        handler: function (response) {
          const order = {
            order_key: data.order.id,
            name: orderData.name,
            mobile: orderData.mobile,
            address: orderData.address,
            paymentMethod: "Razorpay",
            paymentStatus: "Paid",
            paymentId: response.razorpay_payment_id,
            items: cart,
            totalAmount: totalPrice,
            status: "Confirmed",
          };

          localStorage.setItem("lastOrder", JSON.stringify(order));

          localStorage.removeItem("cart");
          localStorage.removeItem("orderItems");
          localStorage.removeItem("orderTotal");

          navigate("/orderplaced");
        },

        theme: {
          color: "#0284c7",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.log("Payment error:", error);
      alert("Payment failed");
    }
  };

  return (
    <div className="customer-page">
      <div className="customer-card">
        <h1 className="c">Customer Details</h1>

        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={orderData.name}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={orderData.mobile}
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Address"
          value={orderData.address}
          onChange={handleChange}
        />

        <select
          name="paymentMethod"
          value={orderData.paymentMethod}
          onChange={handleChange}
        >
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="Paynow">Paynow</option>
        </select>

        <h2>Total Amount: ₹{totalPrice}</h2>

        {orderData.paymentMethod === "Cash on Delivery" ? (
          <button onClick={cashOnDelivery}>Place Order</button>
        ) : (
          <button onClick={buyNow}>Pay Now</button>
        )}
      </div>
    </div>
  );
}

export default Customerpage;