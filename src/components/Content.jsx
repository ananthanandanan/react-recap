import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Content() {
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
    <main className="content">
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                onDoubleClick={() => handleCheck(item.id)}
                style={
                  item.checked
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p
          className="empty"
          style={{
            marginTop: "1rem",
          }}
        >
          Your List is Empty
        </p>
      )}
    </main>
  );
}

export default Content;
