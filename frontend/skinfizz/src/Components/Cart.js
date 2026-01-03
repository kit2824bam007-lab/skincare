import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cart")
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.log(err));
  }, []);

  const removeItem = (id) => {
    fetch(`http://localhost:5000/api/cart/${id}`, {
      method: "DELETE",
    }).then(() => {
      setCartItems(cartItems.filter((item) => item._id !== id));
    });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const checkout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartItems,
        totalAmount: totalPrice,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Order placed successfully! 🎉");
        setCartItems([]); 
      })
      .catch(() => alert("Checkout failed"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Skinfizz Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              style={{
                display: "flex",
                gap: "15px",
                border: "1px solid #f3b6c6",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "8px",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.productName}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />

              <div style={{ flex: 1 }}>
                <h4>{item.productName}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>

              <button
                onClick={() => removeItem(item._id)}
                style={{
                  backgroundColor: "#ff4d6d",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <div style={{ marginTop: "20px" }}>
            <h3>Total Price: ₹{totalPrice}</h3>

            <button
              onClick={checkout}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "12px 20px",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
