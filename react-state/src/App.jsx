import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import FilterButtons from "./components/FilterButtons";
import ListItem from "./components/ListItem";
import ClearButton from "./components/ClearButton";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteAll() {
    setItems([]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  const filteredItems =
    filter === "completed"
      ? items.filter((i) => i.completed)
      : filter === "uncompleted"
        ? items.filter((i) => !i.completed)
        : items;

  function showCompleted() {
    setFilter("completed");
  }

  function showUncompleted() {
    setFilter("uncompleted");
  }

  function showAll() {
    setFilter("all");
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  return (
    <div className="container">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />
      <FilterButtons
        showCompleted={showCompleted}
        showUncompleted={showUncompleted}
        showAll={showAll}
      />
      <ListItem
        urunler={filteredItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <ClearButton onDeleteItem={handleDeleteAll} />
    </div>
  );
}

