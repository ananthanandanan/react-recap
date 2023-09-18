// import './App.css'

import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );

  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  };

  /* add item */
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const AddedItem = { id, item, checked: false };
    const listItems = [...items, AddedItem];
    setAndSaveItems(listItems);
  };

  /* handle check */
  const handleCheck = (id) => {
    const newItems = items.map((item) => {
      // check if item id matches the id of the item clicked
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setAndSaveItems(newItems);
  };

  const handleDelete = (id) => {
    const afterDeleteItems = items.filter((item) => item.id !== id);
    setAndSaveItems(afterDeleteItems);
  };

  // handle submit for adding new item
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    if (!newItem) return;

    addItem(newItem);
    setNewItem("");
    console.log("submit");
  };
  return (
    <>
      <div className="App">
        <Header title="Groceries List" />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
        {/* Searching for an item in the list */}
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(searchItem.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
    </>
  );
}

export default App;
