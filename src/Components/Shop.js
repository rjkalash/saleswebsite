import React from "react";
import '../styles/Shop.css'
const Shop = () => {
  const items = [
    { id: 1, name: "Product A", price: "$10" },
    { id: 2, name: "Product B", price: "$20" },
    { id: 3, name: "Product C", price: "$30" }
  ];

  return (
    <section className="shop">
      <h2>Our Products</h2>
      <div className="products">
        {items.map(item => (
          <div key={item.id} className="product-card">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;