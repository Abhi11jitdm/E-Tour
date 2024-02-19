import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useParams, useNavigate } from "react-router-dom";
import { useSelectedOptions } from "./SelectedOptionsContext";

function BookingDates() {
  const { id } = useParams();
  const [packages, setPackages] = useState([]);
  const { dateSetter } = useSelectedOptions();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      async function getPackage() {
        try {
          const response = await fetch(
            `http://localhost:8080/api/package/${id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setPackages(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      getPackage();
    }
  }, [id]);
  console.log(packages.date);

  function handleBookNowClick(packID, date) {
    if (
      sessionStorage.getItem("isAuthenticated") &&
      sessionStorage.getItem("userinfo")
    ) {
      dateSetter(date);
      navigate("/pass", { state: packID });
    } else {
      dateSetter(date);
      navigate("/login", { state: packID });
    }
  }
  return (
    <div
      style={{
        width: "80%",
        marginLeft: "10%",
        marginBottom: "5%",
        marginTop: "10%",
        paddingLeft: "10%",
      }}
    >
      <Table striped bordered hover size="sm" variant="dark">
        {/* <Table responsive> */}
        <thead>
          <tr>
            <th>Departure Date</th>
            <th>End Date</th>
            <th>Days</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {packages.date &&
            packages.date.map((date, index) => (
              <tr key={index}>
                <td>{date.departure_date}</td>
                <td>{date.departure_end_date}</td>
                <td>{date.departure_no_of_days}</td>
                <td>
                  <Button
                    onClick={() => {
                      handleBookNowClick(id, date);
                    }}
                  >
                    Book
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BookingDates;
