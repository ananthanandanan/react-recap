import ReactPropTypes from "prop-types";

function Footer({ length }) {
  return (
    <footer className="footer">
      <p>
        {length} {length > 1 ? "items" : "item"}
      </p>
    </footer>
  );
}

Footer.propTypes = {
  length: ReactPropTypes.number.isRequired,
};

export default Footer;
