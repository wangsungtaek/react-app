import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import ComButton from "./components/ComButton";
import Header from "./components/Header";

import { getEmotionImage } from "./util/get-emotion-icon";

function App() {
  return (
    <>
      <Header
        title="header"
        leftChild={<ComButton text="left" />}
        rightChild={<ComButton text="right" />}
      />
      <ComButton text="123" type="DEFAULT" />
      <ComButton text="123" type="POSITIVE" />
      <ComButton text="123" type="NAGATIVE" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
