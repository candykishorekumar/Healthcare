import { useEffect, useRef, useState } from "react";
import "./Orderplaced.css";

function Orderplaced() {
  const [order, setOrder] = useState(null);
  const hasSaved = useRef(false);

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("lastOrder"));
    setOrder(savedOrder);

    const saveOrderToDatabase = async () => {
      if (!savedOrder) return;
      if (hasSaved.current) return;

      hasSaved.current = true;

      try {
        const response = await fetch("http://localhost:8000/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            order_key: savedOrder.order_key,
            name: savedOrder.name,
            mobile_number: savedOrder.mobile,
            address: savedOrder.address,
            medicines: savedOrder.items || [],
            payment_method: savedOrder.paymentMethod,
            payment_status: savedOrder.paymentStatus,
            total_amount: savedOrder.totalAmount,
            order_status: "Confirmed",
            payment_id: savedOrder.paymentId || "",
          }),
        });

        const data = await response.json();
        console.log("Order saved:", data);
      } catch (error) {
        console.log("Order save error:", error);
      }
    };

    saveOrderToDatabase();
  }, []);

  if (!order) {
    return <h2>No order found</h2>;
  }

  return (
    <div className="order-page">
      <div className="order-card">
        <h1>Order Placed Successfully</h1>

        <h3>Customer Details</h3>
        <p><b>Name:</b> {order.name}</p>
        <p><b>Mobile:</b> {order.mobile}</p>
        <p><b>Address:</b> {order.address}</p>

        <h3>Medicines Ordered</h3>
        {order.items?.map((item, index) => (
          <p key={index}>
            {item.name} - ₹{item.price}
          </p>
        ))}

        <h3>Payment Details</h3>
        <p><b>Total Amount:</b> ₹{order.totalAmount}</p>
        <p><b>Payment Method:</b> {order.paymentMethod}</p>
        <p><b>Payment Status:</b> {order.paymentStatus}</p>
        <p><b>Order Status:</b> Confirmed</p>

        {order.paymentId && <p><b>Payment ID:</b> {order.paymentId}</p>}

        <a href="/medical" className="continue-btn">
          Continue Shopping
        </a>
      </div>
    </div>
  );
}

export default Orderplaced;