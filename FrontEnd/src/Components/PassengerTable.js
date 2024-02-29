import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function PassengerTable({ passengers, handleRemove }) {
  console.log(passengers);
  return (
    <Table striped bordered hover size="sm" variant="dark">
      {/* <Table responsive> */}
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>State</th>
          <th>City</th>
          <th>Zip</th>
          <th>Passenger Type</th>
          {/* <th>Action</th> */}
        </tr>
      </thead>
      <tbody>
        {passengers.map((passenger, index) => (
          <tr key={index}>
            <td>{passenger.firstName}</td>
            <td>{passenger.lastName}</td>
            <td>{passenger.mobile}</td>
            <td>{passenger.address}</td>
            <td>{passenger.state}</td>
            <td>{passenger.city}</td>
            <td>{passenger.zip}</td>
            <td>{passenger.passengerType}</td>
            {/* <td>
              <Button onClick={() => handleRemove(index)}>Remove</Button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PassengerTable;
