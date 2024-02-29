import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Categories.module.css";
import CarouselComp from "./CarouselComp";

function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch("http://localhost:8080/api/categories");
        // const response = await fetch("https://localhost:7159/api/category"); //DotNet
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getCategories();
  }, []);

  const handleContainerClick = (id, hasSubcategories) => {
    if (hasSubcategories) {
      navigate(`/category/${id}`);
    } else {
      navigate(`/packages/${id}`, { state: "category" });
    }
  };

  return (
    <div>
      <CarouselComp></CarouselComp>

      <div className={styles.categories_container}>
        {categories.map((category) => (
          <div
            className={styles.category_card}
            key={category.category_id}
            style={{ background: "lightgrey" }}
            onClick={() => {
              handleContainerClick(
                category.category_id,
                category.subcategory.length > 0
              );
              // console.log(category.subcategory);
            }}
          >
            <img
              src={category.category_image_path}
              alt={category.category_name}
            />
            <div className={styles.category_card_info}>
              <h2>{category.category_name}</h2>
              <p>{category.category_info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
