function Footer({ length }) {
  return (
    <footer className="footer">
      <p>
        {length} {length > 1 ? "items" : "item"}
      </p>
    </footer>
  );
}

export default Footer;
