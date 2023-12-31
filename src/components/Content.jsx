import ListItem from "./ListItem";
import ReactPropTypes from "prop-types";

function Content({ items, handleCheck, handleDelete }) {
  return (
    <main className="content">
      {items.length ? (
        <ListItem
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
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

Content.propTypes = {
  items: ReactPropTypes.array.isRequired,
  handleCheck: ReactPropTypes.func.isRequired,
  handleDelete: ReactPropTypes.func.isRequired,
};

export default Content;
