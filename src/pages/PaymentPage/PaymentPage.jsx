import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./PaymentPage/PaymentPage.css";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    setLoading(true); // show loader

    setTimeout(() => {
      navigate("/payment-success");
    }, 3000);
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <p className="secure">Secure Checkout (Test Mode)</p>

      <form className="payment-form" onSubmit={handlePayment}>
        <label>Card Number</label>
        <input type="text" placeholder="4242 4242 4242 4242" required />

        <label>Expiry Date</label>
        <input type="text" placeholder="MM/YY" required />

        <label>CVV</label>
        <input type="text" placeholder="123" required />

        <label>Name on Card</label>
        <input type="text" placeholder="John Doe" required />

        <label>Email</label>
        <input type="email" placeholder="example@gmail.com" required />

        {loading ? (
          <div className="loader"></div>
        ) : (
          <button type="submit" className="pay-btn">
            Pay Now
          </button>
        )}
      </form>
    </div>
  );
}
