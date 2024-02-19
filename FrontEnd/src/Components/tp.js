// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import styles from "./CustomerForm.module.css";

// function CustomerForm() {
//   const states = [
//     "Andhra Pradesh",
//     "Arunachal Pradesh",
//     "Assam",
//     "Bihar",
//     "Chhattisgarh",
//     "Goa",
//     "Gujarat",
//     "Haryana",
//     "Himachal Pradesh",
//     "Jharkhand",
//     "Karnataka",
//     "Kerala",
//     "Madhya Pradesh",
//     "Maharashtra",
//     "Manipur",
//     "Meghalaya",
//     "Mizoram",
//     "Nagaland",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//     "Sikkim",
//     "Tamil Nadu",
//     "Telangana",
//     "Tripura",
//     "Uttar Pradesh",
//     "Uttarakhand",
//     "West Bengal",
//     "Andaman and Nicobar Islands",
//     "Chandigarh",
//     "Dadra and Nagar Haveli and Daman and Diu",
//     "Delhi",
//     "Ladakh",
//     "Lakshadweep",
//     "Puducherry",
//   ];
//   const [customer, setCustomer] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     gender: "",
//     mobile: "",
//     password: "",
//     username: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const [validated, setValidated] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCustomer({
//       ...customer,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     const form = event.currentTarget;
//     event.preventDefault();
//     event.stopPropagation();
//     if (form.checkValidity() === false) {
//       setValidated(true);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/api/customer", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(customer),
//       });

//       if (!response.ok) {
//         const data = await response.json();
//         throw new Error(data);
//       }

//       // Reset the form and state after successful submission
//       form.reset();
//       setValidated(false);
//       setErrorMessage("");
//       setShowPopup(false);

//       // Handle success response
//       console.log("Form submitted successfully");
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setErrorMessage(error.message);
//       // Handle error response
//     }
//   };
//   const handleCheckboxChange = (e) => {
//     setShowPopup(e.target.checked);
//   };

//   const handleAgree = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div style={{ margin: "10%", justifyContent: "center" }}>
//       <Form
//         style={{
//           padding: "1%",
//           height: "50%",
//           border: "1px solid black",
//           justifyContent: "center",
//         }}
//         noValidate
//         validated={validated}
//         onSubmit={handleSubmit}
//       >
//         <h1>SignUp</h1>
//         {errorMessage && <div className="error-message">{errorMessage}</div>}
//         <Row className="mb-2">
//           <Form.Group as={Col} md="4" controlId="validationCustom01">
//             <Form.Label>First name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="First name"
//               name="firstname"
//               onChange={handleChange}
//             />
//             <Form.Control.Feedback>Valid</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group as={Col} md="4" controlId="validationCustom02">
//             <Form.Label>Last name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="Last name"
//               name="lastname"
//               onChange={handleChange}
//             />
//             <Form.Control.Feedback>Valid</Form.Control.Feedback>
//           </Form.Group>
//         </Row>

//         <Row>
//           <Form.Group as={Col} md="4" controlId="formGridGender">
//             <Form.Label>Gender</Form.Label>
//             <Form.Select
//               defaultValue="Choose..."
//               name="gender"
//               onChange={handleChange}
//             >
//               <option>Choose...</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">other</option>
//             </Form.Select>
//           </Form.Group>

//           <Form.Group as={Col} md="4" controlId="formGridDate">
//             <Form.Label>Date Of Birth</Form.Label>
//             <Form.Control
//               type="date"
//               placeholder="Enter date of birth"
//               name="dateofbirth"
//               onChange={handleChange}
//             />
//           </Form.Group>
//         </Row>

//         <Row className="mb-2">
//           <Form.Group as={Col} md="4" controlId="formGridEmail">
//             <Form.Label>UserName</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="Enter username"
//               name="username"
//               onChange={handleChange}
//             />
//             <Form.Control.Feedback type="invalid">
//               Please enter Username.
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group as={Col} md="4" controlId="formGridPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               required
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//             />
//             <Form.Control.Feedback type="invalid">
//               Please enter Passwprd.
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Row>

//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Email"
//             aria-describedby="inputGroupPrepend"
//             required
//             name="email"
//             onChange={handleChange}
//           />
//           <Form.Control.Feedback type="invalid">
//             Please enter email.
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-4" controlId="formGridAddress1">
//           <Form.Label>Address</Form.Label>
//           <Form.Control
//             required
//             placeholder="1234 Main St"
//             name="address"
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formGridAddress2">
//           <Form.Label>Mobile</Form.Label>
//           <Form.Control
//             required
//             placeholder="Enter 10 digit number"
//             name="mobile"
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formGridCity">
//             <Form.Label>City</Form.Label>
//             <Form.Control required name="city" onChange={handleChange} />
//           </Form.Group>

//           <Form.Group as={Col} md="4" controlId="formGridState">
//             <Form.Label>State</Form.Label>
//             <Form.Select
//               defaultValue="Choose..."
//               name="state"
//               onChange={handleChange}
//             >
//               <option>Choose...</option>
//               {states.map((state, index) => (
//                 <option key={index}>{state}</option>
//               ))}
//             </Form.Select>
//           </Form.Group>

//           <Form.Group as={Col} md="4" controlId="formGridZip">
//             <Form.Label>Pincode</Form.Label>
//             <Form.Control required name="pincode" onChange={handleChange} />
//           </Form.Group>
//         </Row>

//         <Form.Group className="mb-3" id="formGridCheckbox">
//           <Form.Check
//             type="checkbox"
//             label="I agree to the Terms and Conditions"
//             onChange={handleCheckboxChange}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// }

// export default CustomerForm;

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

  const cId = JSON.parse(sessionStorage.getItem("userinfo")).customer_id;

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
    cost: "",
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
        pax_amount: passenger.cost, // Use the cost from the passenger state
        package_id: packageid,
        customer_id: cId,
      };

      try {
        const response = await fetch("http://localhost:8080/api/passenger", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passTab),
        });

        if (!response.ok) {
          throw new Error("Failed to add passenger.");
        }

        setPassengers([...passengers, passenger]);
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
          cost: "",
        });
      } catch (error) {
        console.error("Error adding passenger:", error);
      }
    }
  };

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
        updatedCost = 0; // Default cost if no type is selected
    }

    // Update the passenger state including the cost
    setPassenger((prevPassenger) => ({
      ...prevPassenger,
      [name]: value,
      cost: updatedCost, // Update the cost based on the selected type
    }));
  };

  const handleRemove = (index) => {
    setPassengers(passengers.filter((_, i) => i !== index));
  };

  const handlePayClick = () => {
    swariSetter(passengers);
    navigate("/cost");
  };

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
            size="sm"
            name="passengerType"
            value={passenger.passengerType}
            onChange={handleChange}
            style={{ width: "30%" }}
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
