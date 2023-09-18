import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import ReactPropTypes from "prop-types";

function AddItem({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add an item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
}

AddItem.propTypes = {
  newItem: ReactPropTypes.string.isRequired,
  setNewItem: ReactPropTypes.func.isRequired,
  handleSubmit: ReactPropTypes.func.isRequired,
};

export default AddItem;
