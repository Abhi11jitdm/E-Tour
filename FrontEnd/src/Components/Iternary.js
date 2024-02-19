import React from "react";
import styles from "./Iternary.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelectedOptions } from "./SelectedOptionsContext";

import Button from "react-bootstrap/Button";

const Iternary = () => {
  const { packSetter, packageSetter, packageName } = useSelectedOptions();

  const [packages, setPackages] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const pack = location.state;
  useEffect(() => {
    if (id) {
      async function getSubCategory() {
        try {
          const response = await fetch(
            `http://localhost:8080/api/package/${id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();

          const sortedData = data.iternary.sort(
            (a, b) => a.iternery_id - b.iternery_id
          );
          data.iternary = sortedData;
          setPackages(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      getSubCategory();
    }
  }, [id]);
  function handleBookNowClick(pack, packID) {
    const userInfo = sessionStorage.getItem("userinfo");
    const isUserLoggedIn = !!userInfo;
    if (isUserLoggedIn) {
      packSetter(packID);
      packageSetter(packageName);
      navigate(`/dates/${packID}`);
    } else {
      navigate("/login", { state: pack });
    }
  }
  return (
    <div className={styles.container}>
      {packages.iternary &&
        packages.iternary.map((iternary) => (
          <div key={iternary.iternery_id} className={styles.card}>
            <div className={styles.left}>
              <div className={styles.day}>{iternary.iternery_day}</div>
              <div className={styles.info}>{iternary.iternery_info}</div>
            </div>
            <div className={styles.right}>
              <img
                src={iternary.iternery_imgpath}
                alt={`Day ${iternary.iternery_day}`}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      <Button
        variant="primary"
        size="lg"
        style={{ marginRight: "10px" }}
        onClick={() => {
          handleBookNowClick(pack, id);
        }}
      >
        Book Now
      </Button>
    </div>
  );
};

export default Iternary;
