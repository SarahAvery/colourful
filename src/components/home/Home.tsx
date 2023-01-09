import { Link } from "react-router-dom";
import { sheetConfig } from "../../data/sheetConfig";
import HomeStyled from "./styles";
import flowers from "/images/flowers.jpg";

const Home = () => {
  return (
    <HomeStyled>
      <div className="colour-pages">
        <ul>
          {sheetConfig.map((sheet) => (
            <li key={sheet.id} id={sheet.id}>
              <Link to={`/page/${sheet.id}`}>
                <img src={sheet.jpg} alt="" />
                {/* <img src={flowers} alt="" /> */}
                <p>{sheet.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </HomeStyled>
  );
};

export default Home;
