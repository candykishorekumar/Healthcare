import { useEffect, useState } from "react";
import "./Admin.css";
import "./Navbar.css";

function Admin() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: null,
  });

  const [editId, setEditId] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
      setProducts([]);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:8000/orders");
      const data = await response.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
      setOrders([]);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const addOrUpdateProduct = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("description", formData.description);

    if (formData.image) {
      data.append("image", formData.image);
    }

    const url = editId
      ? `http://localhost:8000/products/${editId}`
      : "http://localhost:8000/products";

    const method = editId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        body: data,
      });

      if (!response.ok) {
        alert("Product save failed");
        return;
      }

      setFormData({
        name: "",
        price: "",
        category: "",
        description: "",
        image: null,
      });

      setEditId(null);
      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const editProduct = (product) => {
    setEditId(product._id);

    setFormData({
      name: product.name || "",
      price: product.price || "",
      category: product.category || "",
      description: product.description || "",
      image: null,
    });
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
      });

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      await fetch(`http://localhost:8000/orders/${orderId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_status: status,
        }),
      });

      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <h2 className="nav-company-name">Health Care</h2>

        <div>
          <a className="v" href="/login">
            Logout
          </a>
        </div>

        <button
          className="nav-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        
        
      </nav>
      <div className={`sidebar1 ${isOpen ? "active" : ""}`}>
        <ul>
          <li><a href="/Booking_details" className="side">Booking Details</a></li>
         
        </ul>
      </div>

      <div className="admin-page">
        <h1>Admin Dashboard</h1>

        <div className="admin-section">
          <h2 className="Add">
            {editId ? "Update Product" : "Add Product"}
          </h2>

          <form onSubmit={addOrUpdateProduct} className="product-form">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
            />

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required={!editId}
            />

            <button className="A" type="submit">
              {editId ? "Update Product" : "Add Product"}
            </button>
          </form>
        </div>

        <div className="admin-sectionpage">
          <h2>Products</h2>

          <div className="product-grid">
            {products.length > 0 ? (
              products.map((product) => (
                <div className="product-card" key={product._id}>
                  <img src={product.image} alt={product.name} />

                  <h3>{product.name}</h3>
                  <p>₹{product.price}</p>
                  <p>{product.category}</p>
                  <p>{product.description}</p>

                  <button onClick={() => editProduct(product)}>
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>

        <div className="orders-section">
          <h2 className="H">Orders</h2>

          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Medicines</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Payment Status</th>
                <th>Order Status</th>
                <th>Change Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order.name}</td>
                    <td>{order.mobile_number}</td>
                    <td>{order.address}</td>

                    <td>
                      {Array.isArray(order.medicines) &&
                        order.medicines.map((item, index) => (
                          <p key={index}>
                            {item.name} - ₹{item.price}
                          </p>
                        ))}
                    </td>

                    <td>₹{order.total_amount}</td>
                    <td>{order.payment_method}</td>
                    <td>{order.payment_status}</td>
                    <td>{order.order_status}</td>

                    <td>
                      <select
                        value={order.order_status || "Confirmed"}
                        onChange={(e) =>
                          updateOrderStatus(order._id, e.target.value)
                        }
                      >
                        <option value="Confirmed">Confirmed</option>
                        <option value="Packed">Packed</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No orders found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <br />
        <br />

        <a href="/Booking_details">Booking Details</a>
      </div>
    </>
  );
}

export default Admin;