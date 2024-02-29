import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./BookPass.css";
import PassengerTable from "./PassengerTable";
import { useNavigate } from "react-router-dom";
import { useSelectedOptions } from "./SelectedOptionsContext";

function BookPass() {
  const [validated, setValidated] = useState(false);
  const { packageid, swariSetter } = useSelectedOptions();
  const [cost, setCost] = useState({});
  const [passengers, setPassengers] = useState([]);
  const [userPass, setUserPass] = useState([]);
  const cId = JSON.parse(sessionStorage.getItem("userinfo")).customer_id;
  const token = localStorage.getItem("token");
  let cost1 = 0;
  const [passenger, setPassenger] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    date: "",
    state: "",
    city: "",
    zip: "",
    passengerType: "",
    cost1,
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity()) {
      const passTab = {
        pax_name: passenger.firstName + " " + passenger.lastName,
        pax_birthdate: passenger.date,
        pax_type: passenger.passengerType,
        pax_amount: passenger.cost1, // Use the cost from the passenger state
        package_id: packageid,
        customer_id: cId,
      };
      // const header = { Authorization: `Bearer ${token}` };
      try {
        const response = await fetch("http://localhost:8080/api/passenger", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(passTab),
        });

        if (!response.ok) {
          throw new Error("Failed to add passenger.");
        }

        setPassengers([...passengers, passenger]);
        swariSetter(passengers);
        setPassenger({
          firstName: "",
          lastName: "",
          mobile: "",
          address: "",
          date: "",
          state: "",
          city: "",
          zip: "",
          passengerType: "",
          cost1,
        });
      } catch (error) {
        console.error("Error adding passenger:", error);
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("userinfo")) {
      function getUserPass() {
        try {
          const response = fetch(
            `http://localhost:8080/api/passenger/${cId}/info`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = response.json();
          setUserPass(data);
          console.log(data);
        } catch {}
      }
      getUserPass();
    }
  }, [cId]);

  useEffect(() => {
    if (packageid) {
      async function getPackage() {
        try {
          const response = await fetch(
            `http://localhost:8080/api/package/cost/${packageid}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
          setCost(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      getPackage();
    }
  }, [packageid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedCost = 0;

    // Calculate the cost based on the selected passenger type
    switch (value) {
      case "Single Person":
        updatedCost = cost.single_person_cost;
        break;
      case "Extra Person":
        updatedCost = cost.extra_person_cost;
        break;
      case "Twin Sharing":
        updatedCost = cost.twin_sharing;
        break;
      case "Child With Bed":
        updatedCost = cost.child_with_bed;
        break;
      case "Child W/O Bed":
        updatedCost = cost.child_without_bed;
        break;
      default:
        updatedCost = cost.single_person_cost;
    }

    // Update the passenger state including the cost
    setPassenger((prevPassenger) => ({
      ...prevPassenger,
      [name]: value,
      cost1: updatedCost,
    }));
  };

  // const handleRemove = (index) => {
  //   setPassengers(passengers.filter((_, i) => i !== index));
  // };

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
      setPassengers((prevPassengers) =>
        prevPassengers.filter((passenger) => passenger.pax_id !== passengerId)
      );

      // setPassengers(passengers.filter((_, i) => i !== index));

      console.log("Passenger deleted successfully");
    } catch (error) {
      console.error("Error deleting passenger:", error);
    }
  };

  const handlePayClick = () => {
    swariSetter(passengers);
    navigate("/cost");
  };
  // console.log(userPass);
  return (
    <div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="book-pass-form"
        style={{
          marginTop: "7%",
          marginBottom: "1%",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="firstName"
              value={passenger.firstName}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="lastName"
              value={passenger.lastName}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Mobile Number"
              name="mobile"
              value={passenger.mobile}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="formGridDate">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date of birth"
              name="date"
              onChange={handleChange}
              value={passenger.date}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          {/* Form groups for address, state, city, zip */}
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              name="address"
              value={passenger.address}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              name="state"
              value={passenger.state}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom06">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              value={passenger.city}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid City.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom07">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              name="zip"
              value={passenger.zip}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Select
            required
            size="sm"
            name="passengerType"
            value={passenger.passengerType}
            onChange={handleChange}
            style={{ width: "30%" }}
            defaultValue="Single Person"
          >
            <option>Select the Passenger Type</option>
            <option value="Single Person">
              Single Person - Rs.{cost.single_person_cost}
            </option>
            <option value="Extra Person">
              Extra Person - Rs{cost.extra_person_cost}
            </option>
            <option value="Twin Sharing">
              Twin Sharing - Rs.{cost.twin_sharing}
            </option>
            <option value="Child With Bed">
              Child with Bed - Rs.{cost.child_with_bed}
            </option>
            <option value="Child W/O Bed">
              Child W/O Bed - Rs.{cost.child_without_bed}
            </option>
          </Form.Select>
        </Row>

        <Button type="submit" className="submit-button">
          Add Passenger
        </Button>
      </Form>

      {passengers.length > 0 && (
        <div style={{ width: "70%", marginLeft: "10%", marginBottom: "5%" }}>
          <PassengerTable
            passengers={passengers}
            handleRemove={handleRemove}
          ></PassengerTable>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              variant="primary"
              onClick={() => {
                handlePayClick();
              }}
            >
              Pay
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookPass;
