import { Link } from "react-router-dom";
import { sheetConfig } from "../../data/sheetConfig";
import HomeStyled from "./styles";

const Home = () => {
  return (
    <HomeStyled>
      <div className="colour-pages">
        <ul>
          {sheetConfig.map((sheet) => (
            <li key={sheet.id} id={sheet.id}>
              <Link to={`/page/${sheet.id}`}>
                <img src={sheet?.jpg} alt="" />
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
