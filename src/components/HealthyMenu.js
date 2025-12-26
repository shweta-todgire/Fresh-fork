import { useEffect, useRef } from "react";
import "./HealthyMenu.css";

const dishes = [
  {
    name: "Vegetable Poha",
    image: "/assets/poha.png",
    description: "Light, nutritious breakfast.",
    calories: "250 kcal",
    ingredients: ["Flattened rice", "Carrots", "Peas", "Onions", "Turmeric", "Spices"],
  },
  {
    name: "Avocado Toast",
    image: "/assets/avocado-toast.png",
    description: "Healthy fats for heart and brain health.",
    calories: "280 kcal",
    ingredients: ["Whole grain bread", "Avocado", "Lemon", "Vegies", "Pepper"],
  },
  {
    name: "Grilled Veg Bowl",
    image: "/assets/vegbowl.png",
    description: "Packed with vitamins and antioxidants.",
    calories: "350 kcal",
    ingredients: ["Broccoli", "Bell peppers", "Zucchini", "Herbs", "Paneer", "Rice"],
  },
  {
    name: "Sprouts Chaat",
    image: "/assets/sprouts.png",
    description: "High-protein snack that boosts immunity.",
    calories: "220 kcal",
    ingredients: ["Moong sprouts", "Tomatoes", "Onion", "Coriander", "Chaat masala"],
  },
  {
    name: "Fruit Yogurt",
    image: "/assets/yogurt-bowl.png",
    description: "Improves digestion and boosts immunity.",
    calories: "220 kcal",
    ingredients: ["Yogurt", "Strawberries", "Blueberries", "Honey", "Seeds", "Oats"],
  },
];

export default function HealthyMenu() {
  const menuRef = useRef(null);
  const benefitsRef = useRef(null);

  useEffect(() => {
    // Animate dishes when menu appears
    const menuObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dishesItems = entry.target.querySelectorAll(".dish-item");
            dishesItems.forEach((item) => item.classList.add("animate"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (menuRef.current) menuObserver.observe(menuRef.current);

    // Animate benefits only when visible
    const benefitsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (benefitsRef.current) benefitsObserver.observe(benefitsRef.current);
  }, []);

  return (
    <section className="healthy-menu" ref={menuRef}>
      <h2>Healthy Menu</h2>

      <div className="dish-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="dish-item">
            <img src={dish.image} alt={dish.name} />
            <div className="dish-mini-card">
              <h4>{dish.name}</h4>
              <p>{dish.description}</p>
              <ul className="ingredients">
                {dish.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
              <span>{dish.calories}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="lifestyle-section">
        <img
          src="/assets/healthy-life.png"
          alt="Healthy Lifestyle"
          className="lifestyle-image"
        />
        <ul className="benefits" ref={benefitsRef}>
            <p> Health Benefits of Our Foods: </p>
            <li>Boosts Energy Levels</li>
            <li>Improves Digestion</li>
            <li>Strengthens Immunity</li>
            <li>Enhances Mental Focus</li>
            <li>Promotes Skin Health</li>
            <li>Balances Blood Sugar Levels</li>
        </ul>
      </div>
    </section>
  );
}
