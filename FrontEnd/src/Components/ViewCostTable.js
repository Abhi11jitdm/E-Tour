import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import PaymentComponent from "./PaymentComponent";
import { useNavigate } from "react-router-dom";

function ViewCostTable({ cost, swari }) {
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();
  let total = 0;
  console.log(swari);
  if (cost && swari) {
    total = swari.reduce((acc, passenger) => acc + passenger.cost1, 0);
    total += cost.cost;
  }

  const handlePay = () => {
    setShowPayment(true);
  };

  const handleClosePayment = () => {
    setShowPayment(false);
  };

  const handleBack = () => {
    navigate("/");
  };

  console.log(swari);
  console.log(cost);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%" /* Adjust the width as needed */,
        height: "80vh" /* Adjust the height as needed */,
        textAlign: "center",
      }}
    >
      <div style={{ width: "65%" }}>
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Passenger Type</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {swari &&
              swari.map((passenger, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{passenger.firstName}</td>
                  <td>{passenger.lastName}</td>
                  <td>{passenger.passengerType}</td>
                  <td>{passenger.cost1}</td>
                </tr>
              ))}

            <tr>
              <td colSpan="4" style={{ textAlign: "right" }}>
                Tour Package Cost:
              </td>
              <td>{cost.cost}</td>
            </tr>

            <tr>
              <td colSpan="4" style={{ textAlign: "right" }}>
                Total:
              </td>
              <td>{total}</td>
            </tr>
          </tbody>
        </Table>
        <Button
          type="submit"
          className="submit-button"
          size="lg"
          variant="success"
          onClick={handlePay}
        >
          Pay Now
        </Button>
        <br />
        <br />
        <Button
          size="sm"
          variant="danger"
          type="submit"
          className="submit-button"
          onClick={handleBack}
        >
          Cancel
        </Button>
      </div>
      {showPayment && (
        <PaymentComponent
          onClose={handleClosePayment}
          cost={cost}
          total={total}
        />
      )}
    </div>
  );
}

export default ViewCostTable;
