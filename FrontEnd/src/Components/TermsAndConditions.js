// TermsAndConditions.js
import React from 'react';
import styles from './TermsAndConditions.module.css'; // Import CSS module styles

function TermsAndConditions() {
  return (
    <div className={styles.container}>
      <h1>Terms and Conditions</h1>
      <p>Welcome to our tour website. By using our services, you agree to the following terms and conditions:</p>
      
      <h5>1. Booking</h5>
      <p>Bookings are subject to availability and are not confirmed until payment is received.</p>
      
      <h5>2. Cancellation</h5>
      <p>Cancellation policies vary depending on the tour package. Please refer to the specific cancellation policy for your booking.</p>
      
      <h5>3. Liability</h5>
      <p>We are not liable for any loss, injury, or damage to property during the tour. Participants are responsible for their own safety.</p>
      
      <h5>4. Privacy</h5>
      <p>We collect personal information for the purpose of booking and managing tours. Your information will not be shared with third parties.</p>
    </div>
  );
}

export default TermsAndConditions;
