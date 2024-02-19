import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './CustomerForm1.module.css'
import TermsAndConditions from '../TermsAndConditions';

function GridComplexExample() {
    const states = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
        'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
        'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
        'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
        'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
        'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Ladakh', 'Lakshadweep',
        'Puducherry'];
    const [showPopup, setShowPopup] = useState(false);

  const handleCheckboxChange = (e) => {
    setShowPopup(e.target.checked);
  };

  const handleAgree = () => {
    setShowPopup(false);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div>
    
    <Form style={{margin : "10%"}} noValidate validated={validated} onSubmit={handleSubmit}>
      <h1>SignUp</h1>

      <Row className="mb-3">

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="User"
          />
          <Form.Control.Feedback>Valid</Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="User"
          />
          <Form.Control.Feedback>Valid</Form.Control.Feedback>
        </Form.Group>
        </Row>

        <Row>

        <Form.Group as={Col} md="4" controlId="formGridEmail">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="email" placeholder="Enter FirstName" />
        </Form.Group> 

        {/*<Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control type="email" placeholder="Enter LastName" />
        </Form.Group> */}
        <Form.Group as={Col} md="4" controlId="formGridEmail">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="date" placeholder="Enter date of birth" />
        </Form.Group>
        
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="formGridEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="name" placeholder="Enter username" />
        </Form.Group>   

        <Form.Group as={Col} md="4" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </Row>

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter email.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control 
          required
          placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Mobile</Form.Label>
          <Form.Control 
          required
          placeholder="Enter 10 digit number" />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group> */}

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

        <Form.Group as={Col} md="4" controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
         <option>Choose...</option>
        {states.map((state, index) => (
          <option key={index}>{state}</option>
        ))}
         </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="4"controlId="formGridZip">
            <Form.Label>Pincode</Form.Label>
            <Form.Control />
        </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="I agree to the Terms and Conditions" onChange={handleCheckboxChange} />
         </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>


    

      
{showPopup && (
        <div className={styles.popupContainer}>
          <div className={styles.popup}>
            <div className={styles.popupContent}>
            <TermsAndConditions />
              <Button variant="primary" onClick={handleAgree}>I Agree</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GridComplexExample;
