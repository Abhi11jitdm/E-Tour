// import React from "react";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdb-react-ui-kit";

// export default function App() {
//   return (
//     <MDBFooter
//       className="text-center text-lg-start text-muted "
//       style={{ backgroundColor: "#fff" }}
//     >
//       <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//         <div className="me-5 d-none d-lg-block">
//           <span>Get connected with us on social networks:</span>
//         </div>
//         <div>
//           <a href="/" className="me-4 text-reset">
//             <MDBIcon color="secondary" fab icon="facebook-f" />
//           </a>
//           <a href="/" className="me-4 text-reset">
//             <MDBIcon color="secondary" fab icon="twitter" />
//           </a>
//           <a href="/" className="me-4 text-reset">
//             <MDBIcon color="secondary" fab icon="google" />
//           </a>
//           <a href="/" className="me-4 text-reset">
//             <MDBIcon color="secondary" fab icon="instagram" />
//           </a>
//           <a href="/" className="me-4 text-reset">
//             <MDBIcon color="secondary" fab icon="linkedin" />
//           </a>
//           <a href="/" className="me-4 text-reset">
//             <MDBIcon color="secondary" fab icon="github" />
//           </a>
//         </div>
//       </section>

//       <section className="">
//         <MDBContainer className="text-center text-md-start mt-5">
//           <MDBRow className="mt-3">
//             <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">
//                 <MDBIcon color="secondary" icon="gem" className="me-3" />
//                 Company name
//               </h6>
//               <p>
//                 Here you can use rows and columns to organize your footer
//                 content. Lorem ipsum dolor sit amet, consectetur adipisicing
//                 elit.
//               </p>
//             </MDBCol>

//             <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">Products</h6>
//               <p>
//                 <a href="/" className="text-reset">
//                   International
//                 </a>
//               </p>
//               <p>
//                 <a href="/" className="text-reset">
//                   Domestic
//                 </a>
//               </p>
//               <p>
//                 <a href="/" className="text-reset">
//                   Adventures
//                 </a>
//               </p>
//               <p>
//                 <a href="/" className="text-reset">
//                   Custom Tours
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
//               <p>
//                 <MDBIcon color="secondary" icon="home" className="me-2" />
//                 New York, NY 10012, US
//               </p>
//               <p>
//                 <MDBIcon color="secondary" icon="envelope" className="me-3" />
//                 info@example.com
//               </p>
//               <p>
//                 <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
//                 234 567 88
//               </p>
//               <p>
//                 <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
//                 234 567 89
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       <div
//         className="text-center p-4"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
//       >
//         © 2021 Copyright:
//         <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#fff" }}
    >
      <MDBContainer className="p-4">
        <section className="">
          <MDBRow>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
