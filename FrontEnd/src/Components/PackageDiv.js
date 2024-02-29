import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faEye,
  faHotel,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import styles from "./Packages.module.css";
import { useEffect, useState } from "react";

function PackageDiv({ pack, handleBookNowClick, handleButtonClick }) {
  const [cost, setCost] = useState();
  useEffect(() => {
    if (pack) {
      async function getPackage() {
        try {
          const response = await fetch(
            `http://localhost:8080/api/package/cost/${pack.package_id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          //   console.log(data.cost);
          setCost(data.cost);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      getPackage();
    }
  }, []);

  return (
    <div className={styles.package_container} key={pack.package_id}>
      <div className={styles.left}>
        <br />
        <img
          src={pack.package_image_path}
          alt="Package"
          className={styles.package_image}
        />
      </div>
      <div className={styles.middle}>
        <br />
        <div>
          <a href="/">
            <h2>{pack.package_name}</h2>
          </a>
        </div>
        <div>{pack.package_info}</div>
        {/* <div>Dharmashala (2N)| Dalhousie(2N)| Amritsar(1N)</div> */}
        <br />
        <Button
          variant="primary"
          size="lg"
          style={{ marginRight: "10px" }}
          onClick={() => {
            handleBookNowClick(pack.package_id, pack.package_name);
          }}
        >
          Book Now
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => {
            handleButtonClick(pack.package_id);
          }}
        >
          Know More
        </Button>
        <br />
      </div>
      <div className={styles.right}>
        <br />
        <div className="Inclusions">
          <h5>Inclusions</h5>
          <div>
            <div>
              <span>
                <FontAwesomeIcon icon={faUtensils} />
                Meals
              </span>
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={faEye} />
                Sightseeing
              </span>
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={faHotel} />
                Hotels
              </span>
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={faCoins} />
                Taxes
              </span>
            </div>
          </div>
        </div>
        <div className={styles.prices}>
          <h5>Price: Rs. {cost}</h5>
          {/* Additional pricing information can be added here */}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default PackageDiv;
