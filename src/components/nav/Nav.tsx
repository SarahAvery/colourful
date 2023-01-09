import NavStyled from "./styles";
import bob from "../../../src/bob.png";

const Nav = () => {
  return (
    <NavStyled>
      <div>
        <a href="/">
          <img src={bob} alt="" />
        </a>
      </div>
    </NavStyled>
  );
};

export default Nav;
