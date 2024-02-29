// import { useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import styles from "./Packages.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUtensils,
//   faEye,
//   faHotel,
//   faCoins,
// } from "@fortawesome/free-solid-svg-icons";

// function Packages() {
//   const [subcategory, setSubCategory] = useState([]);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const catsub = location.state;
//   useEffect(() => {
//     if (id) {
//       async function getSubCategory() {
//         try {
//           const response = await fetch(
//             `http://localhost:8080/api/${
//               catsub ? "category" : "subcategory"
//             }/${id}`
//           );
//           if (!response.ok) {
//             throw new Error("Network response was not ok");
//           }
//           const data = await response.json();
//           setSubCategory(data);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       }
//       getSubCategory();
//     }
//   }, [id, catsub]);

//   function handleButtonClick(id) {
//     navigate(`/iternary/${id}`);
//   }
//   // console.log(subcategory);
//   return (
//     <div className={styles.maincontainer}>
//       {subcategory.packages &&
//         subcategory.packages.map((pack) => (
//           <div className={styles.package_container} key={pack.package_id}>
//             <div className={styles.left}>
//               <br />
//               <img
//                 src={pack.package_image_path}
//                 alt="Package"
//                 className={styles.package_image}
//               />
//             </div>
//             <div className={styles.middle}>
//               <br />
//               <div>
//                 <a href="/">
//                   <h2>{pack.package_name}</h2>
//                 </a>
//               </div>
//               <div>{pack.package_info}</div>
//               {/* <div>Dharmashala (2N)| Dalhousie(2N)| Amritsar(1N)</div> */}
//               <br />
//               <button
//                 onClick={() => {
//                   handleButtonClick(pack.package_id);
//                 }}
//               >
//                 Know More
//               </button>
//               <br />
//             </div>
//             <div className={styles.right}>
//               <br />
//               <div>
//                 <h5>Inclusions</h5>
//                 <div>
//                   <div>
//                     <span>
//                       <FontAwesomeIcon icon={faUtensils} />
//                       Meals
//                     </span>
//                   </div>
//                   <div>
//                     <span>
//                       <FontAwesomeIcon icon={faEye} />
//                       Sightseeing
//                     </span>
//                   </div>
//                   <div>
//                     <span>
//                       <FontAwesomeIcon icon={faHotel} />
//                       Hotels
//                     </span>
//                   </div>
//                   <div>
//                     <span>
//                       <FontAwesomeIcon icon={faCoins} />
//                       Taxes
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <br />
//             <br />
//           </div>
//         ))}
//     </div>
//   );
// }

// export default Packages;

import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./Packages.module.css";
import { useSelectedOptions } from "./SelectedOptionsContext";
import PackageDiv from "./PackageDiv";

function Packages() {
  const [subcategory, setSubCategory] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { packSetter, packageSetter } = useSelectedOptions();

  const catsub = location.state;
  useEffect(() => {
    if (id) {
      async function getSubCategory() {
        try {
          const response = await fetch(
            `http://localhost:8080/api/${
              catsub ? "category" : "subcategory"
            }/${id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
          setSubCategory(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      getSubCategory();
    }
  }, [id, catsub]);

  function handleButtonClick(packID, packName) {
    packSetter(packID);
    packageSetter(packName);
    navigate(`/iternary/${packID}`, { state: packID });
  }

  function handleBookNowClick(packID, packName) {
    packSetter(packID);
    packageSetter(packName);
    navigate(`/dates/${packID}`);
  }
  return (
    <div className={styles.maincontainer}>
      {subcategory.packages &&
        subcategory.packages.map((pack) => (
          <PackageDiv
            pack={pack}
            handleBookNowClick={handleBookNowClick}
            handleButtonClick={handleButtonClick}
          ></PackageDiv>
        ))}
    </div>
  );
}

export default Packages;
