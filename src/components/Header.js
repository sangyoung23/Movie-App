import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <header>
          <div>
            <h1>YONGFLIX</h1>
          </div>
        </header>
      </Link>
    </div>
  );
};

export default Header;
