// import { useSelectedOptions } from "./SelectedOptionsContext";
// import { useEffect, useState } from "react";
// import ViewCostTable from "./ViewCostTable";

// function ViewCost() {
//   const { packageid, customerId, swari } = useSelectedOptions();

//   const [cost, setCost] = useState();
//   console.log(swari);
//   useEffect(() => {
//     async function getCostByPackageId() {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/package/cost/${packageid}`
//         );
//         if (!response.ok)
//           throw new Error("Could not retrieve cost information");

//         const data = await response.json();
//         setCost(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     getCostByPackageId();
//   }, [packageid]);

//   console.log(cost);

//   return (
//     <div style={{ marginTop: "10%" }}>
//       {cost && <ViewCostTable cost={cost}></ViewCostTable>}
//     </div>
//   );
// }

// export default ViewCost;

import { useSelectedOptions } from "./SelectedOptionsContext";
import { useEffect, useState } from "react";
import ViewCostTable from "./ViewCostTable";

function ViewCost() {
  const { packageid, swari } = useSelectedOptions();
  const [cost, setCost] = useState();
  const [userPass, setUserPass] = useState();
  const cId = JSON.parse(sessionStorage.getItem("userinfo")).customer_id;
  // const [passengers, setPassengers] = useState([]);
  // console.log(swari);
  useEffect(() => {
    async function getCostByPackageId() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/package/cost/${packageid}`
        );
        if (!response.ok)
          throw new Error("Could not retrieve cost information");

        const data = await response.json();
        setCost(data);
      } catch (error) {
        console.log(error);
      }
    }

    getCostByPackageId();
  }, [packageid]);

  // useEffect(() => {
  //   console.log("inside useeffect of viewcost");
  //   if (sessionStorage.getItem("userinfo")) {
  //     console.log("inside if of viewcost");

  //     function getUserPass() {
  //       try {
  //         console.log("inside try of viewcost");

  //         const response = fetch(
  //           `http://localhost:8080/api/passenger/${cId}/info`
  //         );
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         const data = response.json();
  //         setUserPass(data);
  //         console.log(data);
  //       } catch {}
  //     }
  //     getUserPass();
  //   }
  // }, []);

  // Assume passengers are fetched from somewhere and set to state

  return (
    <div style={{ marginTop: "10%" }}>
      {cost && swari && (
        <ViewCostTable cost={cost} swari={swari}></ViewCostTable>
      )}
    </div>
  );
}

export default ViewCost;
