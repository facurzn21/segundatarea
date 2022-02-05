import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import { Routes, Route, Link} from 'react-router-dom';
import Clases from './components/Clases/Clases';

function App() {

  let content = <Home />;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="clases" element={<Clases />} />
      </Routes>
      <Header />
     
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
