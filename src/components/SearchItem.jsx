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

export default SearchItem;
