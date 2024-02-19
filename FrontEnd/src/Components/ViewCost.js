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
