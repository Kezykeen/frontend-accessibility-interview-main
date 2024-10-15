import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Manage from './components/Manage';
import Footer from './components/Footer';
import About from './components/About';

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
