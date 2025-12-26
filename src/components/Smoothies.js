import { useState } from "react";
import "./Smoothies.css";

const smoothies = [ 
    { name: "Strawberry Delight", 
      ingredients: ["Strawberries", "Banana", "Almond Milk", "Honey"], 
      price: "₹199", 
      glassImage: "/assets/strawberry_smoothie.png", 
      bgColor: "#ffb3c6", 
      fruitSlice: "/assets/strawberry_bg.png", 
    }, 
    { name: "Mango Mania", 
      ingredients: ["Mango", "Yogurt", "Dry Fruits", "Chia Seeds"], 
      price: "₹109", 
      glassImage: "/assets/mango_smoothie.png", 
      bgColor: "#ffe599", 
      fruitSlice: "/assets/mango_bg.png", 
    }, 
    { name: "Kiwi Glow", 
      ingredients: ["Nuts", "Kiwi", "Avocado", "Coconut Milk"], 
      price: "₹130", 
      glassImage: "/assets/kiwi_smoothie.png", 
      bgColor: "#b3e6b3", 
      fruitSlice: "/assets/kiwi_bg.png", 
    }, 
    { name: "Berry Bliss", 
      ingredients: ["Blueberries", "Raspberries", "Yogurt", "Honey"], 
      price: "₹180", 
      glassImage: "/assets/berry_smoothie.png", 
      bgColor: "#d3aaff", 
      fruitSlice: "/assets/berry_bg.png", 
    }, 
    { name: "Pineapple Twist", 
      ingredients: ["Pineapple", "Coconut Water", "Mint"], 
      price: "₹109",
      glassImage: "/assets/pineapple_smoothie.png", 
      bgColor: "#ffde99", 
      fruitSlice: "/assets/pineapple_bg.png", 
    }, 
    { name: "Banana Dream", 
      ingredients: ["Banana", "Honey", "Almond Milk"], 
      price: "₹89", 
      glassImage: "/assets/banana_smoothie.png", 
      bgColor: "#b3e6b3", 
      fruitSlice: "/assets/banana_bg.png", 
    }, 
    { name: "Peach Paradise", 
      ingredients: ["Peach", "Orange Juice", "Yogurt", "Honey"], 
      price: "₹149", 
      glassImage: "/assets/orange_smoothie.png", 
      bgColor: "#ffc9a3", 
      fruitSlice: "/assets/orange_bg.png", 
    }, 
];

export default function Smoothies() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((prev) => (prev - 1 + smoothies.length) % smoothies.length);

  const next = () =>
    setActive((prev) => (prev + 1) % smoothies.length);

  return (
    <section className="smoothie-section">
      <h2>Our Smoothies</h2>

      <div className="slider-wrapper">
        <button className="arrow left" onClick={prev}>❮</button>

        <div className="smoothie-slider">
          {smoothies.map((smoothie, index) => {
            const offset = index - active;

            if (Math.abs(offset) > 1) return null;

            return (
              <div
                key={index}
                className={`smoothie-card ${offset === 0 ? "active" : ""}`}
                style={{
                  transform: `translateX(${offset * 220}px) scale(${offset === 0 ? 1 : 0.9})`,
                  zIndex: offset === 0 ? 5 : 2,
                  backgroundColor: smoothie.bgColor,
                }}
              >
                <img
                  src={smoothie.fruitSlice}
                  alt=""
                  className={`fruit-slice ${offset === 0 ? "animate" : ""}`}
                />

                <img
                  src={smoothie.glassImage}
                  alt={smoothie.name}
                  className="glass-image"
                />
              </div>
            );
          })}
        </div>

        <button className="arrow right" onClick={next}>❯</button>
      </div>

      <div className="active-info">
        <h3>{smoothies[active].name}</h3>
        <ul>
          {smoothies[active].ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <span className="smoothie-price">{smoothies[active].price}</span>
      </div>
    </section>
  );
}
