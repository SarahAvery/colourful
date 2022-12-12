import { SUPPORTED_COMPONENTS } from "../components/page/Page";

export type SheetType = {
  id: string;
  svg: string;
  name: string;
  fileName: string;
  component: SUPPORTED_COMPONENTS;
  jpg?: string;
};
