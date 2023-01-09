import React, { useState } from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { sheetConfig } from "../../data/sheetConfig";
import { SheetType } from "../../data/types";
import Palette from "../colourPalette/Palette";
import Page from "../page/Page";
import SvgContainerStyled from "./styles";

const SvgContainer = () => {
  const [fillColour, setFillColour] = useState<string>("");
  const { sheetId } = useParams();

  const currentSheetConfig = useMemo(() => sheetConfig.find(({ id }) => id === sheetId), [sheetId]) as SheetType;
  const currColour = (colour: string) => {
    setFillColour(colour);
  };

  return (
    <>
      <SvgContainerStyled>
        <React.Suspense fallback={<p>Loading...</p>}>
          <Page sheet={currentSheetConfig} fillColour={fillColour} />
        </React.Suspense>
      </SvgContainerStyled>
      <Palette currColour={currColour} />
    </>
  );
};

export default SvgContainer;
