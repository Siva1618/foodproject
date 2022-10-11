import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "sushmi",
    description: "Finist fish veggies",
    price: 22.98,
  },
  {
    id: "m2",
    name: "sushmitha",
    description: "germany speciality",
    price: 16.98,
  },
  {
    id: "m3",
    name: "sumaltha",
    description: "raw materiality",
    price: 13.78,
  },
  {
    id: "m4",
    name: "vinitha",
    description: "American,raw meaty",
    price: 12.68,
  },
];
const mealsList = DUMMY_MEALS.map((meal) => (
  <MealItem
    key={meal.id}
    id={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
  />
));
const AvailableMeals = (props) => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
