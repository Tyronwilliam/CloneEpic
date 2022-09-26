import Header from "./components/Header/Header";
import ViewSaD from "./components/SearchAndDiscover/ViewSaD";
import Home from "../src/pages/Home/index";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Details/Detail";

function App() {
  return (
    <div className="App">
      <Header />
      <ViewSaD />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/fr/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
