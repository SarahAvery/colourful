import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import SvgContainer from "./components/svgContainer/SvgContainer";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:sheetId" element={<SvgContainer />} />
      </Routes>
    </div>
  );
}

export default App;
