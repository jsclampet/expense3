import "./Components/ExpenseList/ExpenseList";
import "./App.css";
import ExpenseList from "./Components/ExpenseList/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter/ExpenseFilter";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([
    {
      description: "Movie Tickets",
      amount: 20,
      category: "Entertainment",
      id: crypto.randomUUID(),
    },
    {
      description: "Water Bill",
      amount: 120,
      category: "Utilities",
      id: crypto.randomUUID(),
    },
    {
      description: "Turkey",
      amount: 10,
      category: "Groceries",
      id: crypto.randomUUID(),
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectItems={(category) => {
            setSelectedCategory(category);
          }}
        />
      </div>
      <ExpenseList
        items={filteredItems}
        onDelete={(id) => setItems(items.filter((item) => id !== item.id))}
      />
    </div>
  );
};

export default App;
