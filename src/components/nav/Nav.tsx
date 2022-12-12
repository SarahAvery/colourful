import NavStyled from "./styles";
import bob from "../../assests/imgs/bob.png";

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
