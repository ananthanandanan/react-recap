import LineItem from "./LineItem";
import ReactPropTypes from "prop-types";

function ListItem({ items, handleCheck, handleDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

ListItem.propTypes = {
  items: ReactPropTypes.array.isRequired,
  handleCheck: ReactPropTypes.func.isRequired,
  handleDelete: ReactPropTypes.func.isRequired,
};

export default ListItem;
