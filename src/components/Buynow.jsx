import { useNavigate } from "react-router-dom";

function Buynow({
  cartItems,
  totalPrice,
  name,
  mobile,
  address,
  paymentMethod,
  setCart,
}) {
  const navigate = useNavigate();

  const placeCashOnDeliveryOrder = () => {
    const orderData = {
      order_key: Date.now().toString(),
      name: name,
      mobile: mobile,
      address: address,
      items: cartItems,
      paymentMethod: "Cash on Delivery",
      paymentStatus: "Pending",
      totalAmount: totalPrice,
      status: "Confirmed",
    };

    localStorage.setItem("lastOrder", JSON.stringify(orderData));
    localStorage.removeItem("cart");

    if (setCart) {
      setCart([]);
    }

    navigate("/orderplaced");
  };

  const payWithRazorpay = async () => {
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
          const orderData = {
            order_key: data.order.id,
            name: name,
            mobile: mobile,
            address: address,
            items: cartItems,
            paymentMethod: "Razorpay",
            paymentStatus: "Paid",
            paymentId: response.razorpay_payment_id,
            totalAmount: totalPrice,
            status: "Confirmed",
          };

          localStorage.setItem("lastOrder", JSON.stringify(orderData));
          localStorage.removeItem("cart");

          if (setCart) {
            setCart([]);
          }

          navigate("/orderplaced");
        },

        theme: {
          color: "#0284c7",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.log("Razorpay error:", error);
    }
  };

  return (
    <div>
      <button onClick={placeCashOnDeliveryOrder}>
        Cash on Delivery
      </button>

      <button onClick={payWithRazorpay}>
        Pay with Razorpay
      </button>
    </div>
  );
}

export default Buynow;