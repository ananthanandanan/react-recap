// import './App.css'

import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      item: "item 1",
      checked: false,
    },

    {
      id: 2,
      item: "item 2",
      checked: false,
    },

    {
      id: 3,
      item: "item 3",
      checked: false,
    },

    {
      id: 4,
      item: "item 4",
      checked: false,
    },

    {
      id: 5,
      item: "item 5",
      checked: false,
    },
  ]);

  /* handle check */
  const handleCheck = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  };

  const handleDelete = (id) => {
    const afterDeleteItems = items.filter((item) => item.id !== id);
    setItems(afterDeleteItems);
    localStorage.setItem("shoppingList", JSON.stringify(afterDeleteItems));
  };
  return (
    <>
      <div className="App">
        <Header title="Groceries List" />
        <Content
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
    </>
  );
}

export default App;
