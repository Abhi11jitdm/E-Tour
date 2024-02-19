import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./SubCategories.module.css";

function SubCategories() {
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    if (id) {
      async function getCategory() {
        try {
          const response = await fetch(
            `http://localhost:8080/api/category/${id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setCategory(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      getCategory();
    }
  }, [id]);

  const handleContainerClick = (id) => {
    history(`/packages/${id}`);
  };

  return (
    <div className={styles.categories_container}>
      {category.subcategory &&
        category.subcategory.map((subcategory) => (
          <div
            className={styles.category_card}
            key={subcategory.subcategory_id}
            onClick={() => {
              handleContainerClick(subcategory.subcategory_id);
            }}
          >
            <img src="/imgs/img1INT.jpg" alt={subcategory.subcategory_name} />
            <div className={styles.category_card_info}>
              <h2>{subcategory.subcategory_name}</h2>
              <p>{subcategory.subcategory_info}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SubCategories;
