/* Header of the App */
import ReactPropTypes from "prop-types";

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

Header.defaultProps = {
  title: "Checklist",
};

Header.propTypes = {
  title: ReactPropTypes.string.isRequired,
};

export default Header;
