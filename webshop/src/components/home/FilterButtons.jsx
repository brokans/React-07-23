import React from "react";
import Button from "react-bootstrap/Button";

function FilterButtons({ dbProducts, setProducts, categories }) {
  const filterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(
      (product) => product.category === categoryClicked
    );
    setProducts(result);
  };
  return (
    <div>
      {categories.map((category) => (
        <div className="d-flex">
          <Button
            key={category.name}
            onClick={() => filterByCategory(category.name)}
          >
            {category.name}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default FilterButtons;
