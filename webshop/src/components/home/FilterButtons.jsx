import React from 'react'
// saab (props) asemel kasutada ka sulgudes ({}), nii ei pea koodi muutma
function FilterButtons({dbProducts, setProducts, categories}) {
    // FILTRID
  // const filterMemory = () => {
  //   const result = props.productsFromFile.filter((product) =>
  //     product.category.includes("memory bank")
  //   );
  //   props.setProducts(result);
  // };

  // const filterUsb = () => {
  //   const result = props.productsFromFile.filter((product) =>
  //     product.category.includes("usb drive"));
  //     props.setProducts(result);
  // };

  // const filterTent = () => {
  //   const result = props.productsFromFile.filter((product) =>
  //     product.category.includes("tent"));
  //     props.setProducts(result);
  // };

  // const filterCamping = () => {
  //   const result = props.productsFromFile.filter((product) =>
  //     product.category.includes("camping"));
  //     props.setProducts(result);
  // };

  const filterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(
      (product) => product.category === categoryClicked
    );
    setProducts(result);
  };
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => filterByCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons