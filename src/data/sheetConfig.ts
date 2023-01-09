import { SUPPORTED_COMPONENTS } from "../components/page/Page";
import { SheetType } from "./types";

export const sheetConfig: SheetType[] = [
  {
    id: "mickeymouse",
    svg: "`../svg/MickeyMouse",
    name: "Mickey Mouse",
    fileName: "MickeyMouse.tsx",
    component: SUPPORTED_COMPONENTS.MICKEY_MOUSE,
    jpg: "/images/mickey.jpg"
  },
  {
    id: "flowers",
    svg: "`../svg/",
    name: "Flowers",
    fileName: "Flowers.tsx",
    component: SUPPORTED_COMPONENTS.FLOWERS,
    jpg: "/images/flowers.jpg"
  },
  {
    id: "relax",
    svg: "`../svg/",
    name: "Relax",
    fileName: "Relax.tsx",
    component: SUPPORTED_COMPONENTS.RELAX,
    jpg: "/images/relax.jpg"
  },
  {
    id: "mandala",
    svg: "`../svg/",
    name: "Mandala",
    fileName: "Mandala.tsx",
    component: SUPPORTED_COMPONENTS.MANDALA,
    jpg: "/images/mandala.jpg"
  }
];
