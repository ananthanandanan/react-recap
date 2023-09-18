import ListItem from "./ListItem";

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

export default Content;
