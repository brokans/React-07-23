import React from 'react'

function Avaleht() {
  const computers = JSON.parse(localStorage.getItem("laptops")) || [];

  const addToCart = (clickedComputer) => {
    const cart = JSON.parse(localStorage.getItem("cartLaptops")) || [];
    cart.push(clickedComputer);
    // Salvestab ostukorvi lokaalselt
    localStorage.setItem("cartLaptop", JSON.stringify(cart));
    // toast.success((t("product-added")));

    // 1. Võtame localStorage'st ostukorvi varasema seisu
    // 2. Võtame LocalStorage'st saadud väärtuselt jutumärgi maha: JSON.parse()
    // 3. Lisame saadud väärtusele juurde ühe toote: .push()
    // 4. Paneme uuenenud väärtustele jutumärgid peale tagasi JSON.stringify()
    // 5. Paneme localStorage'sse tagasi: LocalStorage.setItem()
};

  return ( <div className='avaleht-text'>
    <div>Avaleht</div>
    <div>Ülevaade meie sülearvutitest.</div>
    {computers.map(oneComputer =>
      <div>
          <div>{oneComputer.mark}</div>
          <div>{oneComputer.mudel}</div>
          <div>{oneComputer.maksumus}</div>
          <button onClick={() => addToCart(oneComputer)}>Lisa Ostukorvi</button>
      </div>)}
  </div>
    
  )
}

export default Avaleht