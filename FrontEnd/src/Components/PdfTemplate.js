import ReactPrint from "react-to-print";
import { useRef } from "react";
import Barcode from "react-barcode";
import { useSelectedOptions } from "./SelectedOptionsContext";
import { useLocation } from "react-router-dom";

function PdfTemplate(props) {
  const ref = useRef();
  const location = useLocation();
  const { swari, date, packageName } = useSelectedOptions();
  const passedData = location.state;
  const cost = passedData.cost.cost;
  const invoiceNumber = Math.floor(Math.random() * 90000000) + 10000000;

  const name = JSON.parse(sessionStorage.getItem("userinfo")).firstname;
  const mobile = JSON.parse(sessionStorage.getItem("userinfo")).mobile;
  console.log(date);
  let total = 0;
  if (cost && swari) {
    total = swari.reduce((acc, passenger) => acc + passenger.cost1, 0);
    total += cost;
  }

  return (
    <>
      <div className="container" ref={ref} style={{ marginTop: "10%" }}>
        <div className="container">
          <div className="row">
            <div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 brcode">
                    <Barcode
                      value={`4n%${invoiceNumber}+ut%`}
                      width={1}
                      height={50}
                      displayValue={false}
                    />
                  </div>
                  <div className="col-md-8 text-right bbc">
                    <h4 style={{ color: "#325aa8" }}>
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
                        <td>{cost}</td>
                      </tr>
                      <tr style={{ color: "#F81D2D" }}>
                        <td colSpan="4" style={{ textAlign: "right" }}>
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

      <ReactPrint
        trigger={() => <button>Print</button>}
        content={() => ref.current}
        documentTitle={`INVOICE ${props.InvoiceNumber}`}
      />
    </>
  );
}

export default PdfTemplate;
