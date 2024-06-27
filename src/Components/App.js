import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import State from "./State";

export default function App() {
  const [item, setItem] = useState([]);
  function hendleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function HandleAddItem(item) {
    setItem((items) => [...items, item]);
  }
  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteList() {
    const confirmed = window.confirm(
      "Are you sure you want delete all iteams 🤔"
    );
    if (confirmed) setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={HandleAddItem} />
      <PackingList
        item={item}
        onDeleteItem={hendleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteList={handleDeleteList}
      />
      <State items={item} />
    </div>
  );
}
