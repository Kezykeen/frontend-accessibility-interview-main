import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Manage from "./pages/Manage";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import { Footer, Header } from "./components";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
