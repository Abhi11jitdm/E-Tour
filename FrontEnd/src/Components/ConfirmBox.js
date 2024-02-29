import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./ConfirmBox.module.css";

function ConfirmBox({ setShowConfirmBox, handleLogin }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.confirmBox}>
        <span className={styles.close} onClick={() => setShowConfirmBox(false)}>
          &times;
        </span>
        <h2>Registration Successful!</h2>
        <p>Please login to continue.</p>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default ConfirmBox;
