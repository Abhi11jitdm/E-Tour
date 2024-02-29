import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubCategories from "./SubCategories";
import Packages from "./Packages";
import Categories from "./Categories";
import Home from "./Home";
import Iternary from "./Iternary";
import CustomerForm from "./CustomerForm";
import Login from "./Login";
import BookPass from "./BookPass";
import BookingDates from "./BookingDates";
import ViewCost from "./ViewCost";
import PdfTemplate from "./PdfTemplate";
import AboutUs from "./AboutUs";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Categories />}></Route>
            <Route path="category/:id" element={<SubCategories />} />
            <Route path="packages/:id" element={<Packages />}></Route>
            <Route
              path="dates/:id"
              element={<BookingDates></BookingDates>}
            ></Route>
            <Route path="iternary/:id" element={<Iternary />} />
            <Route path="signup" element={<CustomerForm />} />
            <Route path="login" element={<Login />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="pass" element={<BookPass />} />
            <Route path="cost" element={<ViewCost />} />
          </Route>
          <Route path="invoice" element={<PdfTemplate></PdfTemplate>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
