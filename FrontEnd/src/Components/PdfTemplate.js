import ReactPrint from "react-to-print";
import { useRef, useEffect, useState } from "react";
import Barcode from "react-barcode";
import { useSelectedOptions } from "./SelectedOptionsContext";
import { useLocation } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";

function PdfTemplate(props) {
  const ref = useRef();
  const location = useLocation();
  const [userPass, setUserPass] = useState();

  const { swari, date, packageName } = useSelectedOptions();
  const passedData = location.state;
  const cost = passedData.cost.cost;
  const timestamp = new Date().getTime();
  const timestampString = timestamp.toString().slice(0, -3);
  const invoiceNumber = parseInt(timestampString);
  const name = JSON.parse(sessionStorage.getItem("userinfo")).firstname;
  const mobile = JSON.parse(sessionStorage.getItem("userinfo")).mobile;
  console.log(date);
  let total = 0;
  if (cost && swari) {
    total = userPass.reduce((acc, passenger) => acc + passenger.pax_amount, 0);
    total += cost;
  }

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

  return (
    <>
      <div
        className="container"
        ref={ref}
        style={{ marginTop: "10%", width: "70%", height: "auto" }}
      >
        <div className="container">
          <div className="row">
            <div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 brcode">
                    <Barcode
                      value={packageName + invoiceNumber}
                      width={1}
                      height={50}
                      displayValue={false}
                    />
                  </div>
                  <div className="col-md-8 text-right bbc">
                    <h4 style={{ color: "#325aa8" }}>
                      <img
                        src="/logo192.png"
                        alt=""
                        style={{
                          width: "70px",
                          height: "50px",
                          marginRight: "10px",
                        }}
                      />
                      <strong>Awaiting Tours</strong>
                    </h4>
                    <p>(+91) 1234567890</p>
                    <p>awaitingtours@gmail.com</p>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h2 style={{ color: "#325aa8" }}>INVOICE</h2>
                    <h5> Id: {invoiceNumber}</h5>
                  </div>
                </div>
                <br />
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th> Name</th>

                        <th>Passenger Type</th>
                        <th>Cost</th>
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
                          </tr>
                        ))}
                      <tr>
                        <td colSpan="3" style={{ textAlign: "right" }}>
                          Tour Package Cost:
                        </td>
                        <td>{cost}</td>
                      </tr>
                      <tr style={{ color: "#F81D2D" }}>
                        <td colSpan="3" style={{ textAlign: "right" }}>
                          Total:
                        </td>
                        <td>{total}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <div className="col-md-12">
                    <p>
                      <b>Package Name: </b> {packageName}
                    </p>

                    <p>
                      <b>Departure from </b> {date.departure_date} <b>to </b>
                      {date.departure_end_date}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="col-md-12">
                    <p>
                      <b>Booking Date : </b> {passedData.booked.booking_date}
                    </p>
                    <br />
                    <p>
                      <b>Name</b> : {name}
                    </p>
                    <p>
                      <b>Contact: {mobile}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",

          textAlign: "left",

          marginLeft: "700px",
          marginBottom: "20px",
        }}
      >
        <ReactPrint
          trigger={() => <MDBBtn color="info">Print</MDBBtn>}
          content={() => ref.current}
          documentTitle={`INVOICE ${props.InvoiceNumber}`}
        />
      </div>
    </>
  );
}

export default PdfTemplate;
