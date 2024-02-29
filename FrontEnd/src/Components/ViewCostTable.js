import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import PaymentComponent from "./PaymentComponent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function ViewCostTable({ cost, swari }) {
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();
  const [userPass, setUserPass] = useState([]);
  const cId = JSON.parse(sessionStorage.getItem("userinfo")).customer_id;
  console.log(cId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/passenger/${cId}/info`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserPass(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cId]);

  let total = 0;

  if (cost && userPass) {
    total = userPass.reduce((acc, passenger) => acc + passenger.pax_amount, 0);
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

  const handleRemove = async (passengerId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/passenger/${passengerId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete passenger");
      }

      // Update userPass state by removing the deleted passenger
      setUserPass((prevPassengers) =>
        prevPassengers.filter((passenger) => passenger.pax_id !== passengerId)
      );

      console.log("Passenger deleted successfully");
    } catch (error) {
      console.error("Error deleting passenger:", error);
    }
  };

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
              <th> Name</th>

              <th>Passenger Type</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userPass &&
              userPass.map((passenger, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{passenger.pax_name}</td>

                  <td>{passenger.pax_type}</td>
                  <td>{passenger.pax_amount}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleRemove(passenger.pax_id)}
                    >
                      Remove
                    </Button>
                  </td>
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
        {userPass.length > 0 ? (
          <Button
            type="submit"
            className="submit-button"
            size="lg"
            variant="success"
            onClick={handlePay}
          >
            Pay Now
          </Button>
        ) : (
          <Button
            onClick={() => {
              navigate("/pass");
            }}
          >
            Add Passenger
          </Button>
        )}
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
