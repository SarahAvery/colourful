import React from "react";
import ColoursStyled from "../colours/styles";

export enum SUPPORTED_COMPONENTS {
  MICKEY_MOUSE = "MickeyMouse",
  FLOWERS = "Flowers",
  RELAX = "Relax",
  MANDALA = "Mandala"
}

const COMPONENTS: Record<SUPPORTED_COMPONENTS, any> = {
  MickeyMouse: React.lazy(() => import("../svg/MickeyMouse")),
  Flowers: React.lazy(() => import("../svg/Flowers")),
  Relax: React.lazy(() => import("../svg/Relax")),
  Mandala: React.lazy(() => import("../svg/Mandala"))
};

const Page = ({ sheet, fillColour }: { sheet: { component: SUPPORTED_COMPONENTS }; fillColour: string }) => {
  const Component = COMPONENTS[sheet.component];

  const onclick = (e: React.MouseEvent<HTMLInputElement>) => {
    const targetPath = e.target as HTMLElement;
    const currFillColour = String(targetPath.getAttribute("fill"));
    changeColour({ targetPath, currFillColour });
  };

  // Change fill colour
  const changeColour = ({ targetPath, currFillColour }: { targetPath: HTMLElement; currFillColour: string }) => {
    // validate if colour can be changed
    if (currFillColour === "#000" || currFillColour === "#fff") {
      return;
    } else {
      // change fill to new colour
      targetPath.style.fill = `${fillColour}`;
    }
  };

  return <ColoursStyled onClick={(e: any) => onclick(e)}>{!!Component && <Component />}</ColoursStyled>;
};

export default Page;
