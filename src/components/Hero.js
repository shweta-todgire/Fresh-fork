import { useState } from "react";
import "./Hero.css";

const salads = [
  {
    name: "Caesar",
    image: "/assets/caesar.png",
    ingredients: [
      "Crisp romaine lettuce",
      "Cucumber slices",
      "Shaved parmesan cheese",
      "House-made croutons",
      "Classic Caesar dressing"
    ],
    price: "₹ 259",
    description: "A timeless favorite with bold, savory flavors."
  },
  {
    name: "Greek",
    image: "/assets/greek.png",
    ingredients: [
      "Fresh tomatoes & cucumbers",
      "Ring Onions",
      "Kalamata olives",
      "Creamy feta cheese",
      "Extra virgin olive oil"
    ],
    price: "₹309",
    description: "Bright, refreshing, and Mediterranean-inspired."
  },
  {
    name: "Quinoa",
    image: "/assets/quinoa.png",
    ingredients: [
      "Protein-rich quinoa",
      "Roasted chickpeas",
      "Baby spinach",
      "Zesty lemon vinaigrette"
    ],
    price: "₹ 350",
    description: "Wholesome, filling, and energizing."
  },
  {
    name: "Avocado",
    image: "/assets/avocado.png",
    ingredients: [
      "Fresh avocado slices",
      "Fresh Cucumbers",
      "Seasonal mixed greens",
      "Crunchy seeds",
      "Citrus dressing"
    ],
    price: "₹ 260",
    description: "Creamy, nourishing, and perfectly balanced."
  },
  {
    name: "Berry",
    image: "/assets/berry.png",
    ingredients: [
      "Mixed seasonal berries",
      "Leafy greens",
      "Candied nuts",
      "Honey balsamic glaze"
    ],
    price: "₹ 399",
    description: "Sweet, fresh, and delightfully light."
  }
];

export default function Hero() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((active - 1 + salads.length) % salads.length);

  const next = () =>
    setActive((active + 1) % salads.length);

  return (
    <section className="hero">
      <div className="logo">FreshFork</div>

      {/* INTRO */}
      <div className="intro">
        <h1>Fresh. Healthy. Delicious.</h1>
        <p className="intro-text">
          At FreshFork, we believe food should nourish your body and excite
          your senses. Our salads & smoothies are handcrafted daily using farm-fresh,
          responsibly sourced ingredients.
        </p>

        <div className="intro-highlights">
          <span>Farm Fresh | </span>
          <span>Nutrient Packed | </span>
          <span>Made Daily</span>
        </div>
      </div>

      {/* MAIN ROW */}
      <div className="hero-row">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <button className="arrow left" onClick={prev}>❮</button>
          <button className="arrow right" onClick={next}>❯</button>

          {/* ARC */}
          <div className="arc-wrapper">
            <svg viewBox="0 0 800 450" width="800" height="450">
              <path
                d="M 70 410 A 330 330 0 0 1 730 410"
                className="arc-ring"
              />
            </svg>

            <div className="arc-names">
              {salads.map((salad, index) => {
                const offset = index - active;
                const angle = offset * 24;
                const radius = 330;
                const rad = (angle - 90) * (Math.PI / 180);

                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);

                return (
                  <span
                    key={index}
                    className={`arc-name ${offset === 0 ? "active" : ""}`}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    {salad.name}
                    {offset === 0 && <span className="active-dot" />}
                  </span>
                );
              })}
            </div>
          </div>

          {/* BOWL */}
          <div className="bowl-wrapper">
            <img
              key={active}
              src={salads[active].image}
              alt={salads[active].name}
              className="bowl"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div key={active} className="hero-right">
          <h2>{salads[active].name}</h2>
          <p className="description">{salads[active].description}</p>

          <h4>Ingredients</h4>
          <ul className="ingredients-list">
            {salads[active].ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="price-row">
            <span className="price">{salads[active].price}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
