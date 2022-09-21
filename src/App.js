import Header from "./components/Header/Header";
import ViewSaD from "./components/SearchAndDiscover/ViewSaD";
import Home from "../src/pages/Home/index";
function App() {
  return (
    <div className="App">
      <Header />
      <ViewSaD />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
