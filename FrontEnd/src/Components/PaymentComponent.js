import styles from "./PaymentComponent.module.css";
import { useNavigate } from "react-router-dom";
import { useSelectedOptions } from "./SelectedOptionsContext";

const PaymentComponent = ({ onClose, cost, total }) => {
  const { swari, packageid } = useSelectedOptions();

  const currentDate = new Date();
  const token = localStorage.getItem("token");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  const day = currentDate.getDate();
  console.log(JSON.parse(sessionStorage.getItem("userinfo")).customer_id);
  const amount = total + total * 0.18;
  const booked = {
    booking_date: `${day}-${month}-${year}`,
    customer_id: JSON.parse(sessionStorage.getItem("userinfo")).customer_id,
    package_id: packageid,
    tour_amount: total,
    total_amount: amount,
    taxes: 18,
    email: JSON.parse(sessionStorage.getItem("userinfo")).email,
  };

  const postBooking = () => {
    async function book() {
      try {
        const response = await fetch(`http://localhost:8080/api/booking`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(booked),
        });
      } catch (e) {
        console.log(e);
      }
    }

    book();
  };

  const navigate = useNavigate();
  return (
    <div className={styles.paymentContainer}>
      <div className={styles.paymentContent}>
        <h2>Payment Form</h2>
        <button
          onClick={() => {
            postBooking();
            navigate("/invoice", {
              state: { cost: cost, total: total, booked: booked },
            });
          }}
        >
          Get Invoice
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PaymentComponent;
