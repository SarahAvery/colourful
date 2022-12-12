import { useState } from "react";
import styled from "styled-components";

// Palette colours from here -> https://www.pinterest.com/pin/227080006198568292/
const colours = [
  "rgb(255, 181, 232)",
  "rgb(255, 156, 238)",
  "rgb(255, 204, 249)",
  "rgb(252, 194, 255)",
  "rgb(246, 166, 255)",
  "rgb(178, 141, 255)",
  "rgb(197, 163, 255)",
  "rgb(213, 170, 255)",
  "rgb(236, 212, 255)",
  "rgb(251, 228, 255)",
  "rgb(220, 211, 255)",
  "rgb(167, 154, 255)",
  "rgb(181, 185, 255)",
  "rgb(151, 162, 255)",
  "rgb(175, 203, 255)",
  "rgb(175, 248, 219)",
  "rgb(196, 250, 248)",
  "rgb(133, 227, 255)",
  "rgb(172, 231, 255)",
  "rgb(110, 181, 255)",
  "rgb(191, 252, 198)",
  "rgb(219, 255, 214)",
  "rgb(243, 255, 227)",
  "rgb(231, 255, 172)",
  "rgb(255, 255, 209)",
  "rgb(255, 201, 222)",
  "rgb(255, 171, 171)",
  "rgb(255, 190, 188)",
  "rgb(255, 203, 193)",
  "rgb(255, 245, 186)"
];

const PaletteStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;

  .circle {
    width: 20px;
    height: 20px;
    padding: 5px;
    border: 0.5px solid grey;
    cursor: pointer;

    &:hover {
      border: 1px solid black;
    }
  }

  .active {
    border: 1px solid black;
  }
`;

const Palette = ({ currColour }: { currColour: any }) => {
  const [currSelect, setCurrSelect] = useState<string>("");

  const onclick = (e: React.MouseEvent<HTMLInputElement>) => {
    const colour = e.currentTarget.style.background;
    setCurrSelect(colour);
    currColour(colour);
  };

  return (
    <div>
      <PaletteStyled className="colour-container">
        {colours.map((colour) => {
          return (
            <div
              className={colour === currSelect ? "circle active" : "circle"}
              key={colour}
              style={{ background: colour }}
              onClick={(e: any) => onclick(e)}
            ></div>
          );
        })}
      </PaletteStyled>
    </div>
  );
};

export default Palette;
