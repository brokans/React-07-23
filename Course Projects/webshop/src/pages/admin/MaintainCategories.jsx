import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import config from "../../data/config.json"


function MaintainCategories() {

  const [categories, uCategories] = useState([]);
  const categoryRef = useRef();
  
  useEffect(() => {
      fetch(config.categories)
      .then(res => res.json())
      .then(json => uCategories(json || []))
  }, []);

  function addCategory() {
    categories.push({"name": categoryRef.current.value});
    uCategories(categories.slice());
    
    fetch(config.categories, {
      method: "PUT",
      body: JSON.stringify(categories)
    })
  }


  // võtmikseks "GET" on by defualt
  // lisamiseks: "POST"
  // asendamiseks "PUT"   firebase jaoks on vaja kõik tooted asendada
  // kustutamiseks "DELETE"
  // REST

  function deleteCategory(index) {
    categories.splice(index, 1);
    uCategories(categories.slice());
    fetch(config.categories, {
      method: "PUT",
      body: JSON.stringify(categories)
    })
  }

  return (
    <div>
        <label htmlFor="">Kategooria: </label> {" "}
        <input ref={categoryRef} type="text" />{" "}
        <button onClick={addCategory}>Sisesta</button>
        {categories.map((category, index) =>
          <div>
            {category.name}
            <button onClick={() => deleteCategory(index)}>x</button>
          </div>)}

    </div>
  )
}

export default MaintainCategories