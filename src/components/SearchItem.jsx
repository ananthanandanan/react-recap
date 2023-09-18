import ReactPropTypes from "prop-types";

function SearchItem({ searchItem, setSearchItem }) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search Item</label>
      <input
        autoFocus
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search an item"
        required
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </form>
  );
}

SearchItem.propTypes = {
  searchItem: ReactPropTypes.string.isRequired,
  setSearchItem: ReactPropTypes.func.isRequired,
};

export default SearchItem;
