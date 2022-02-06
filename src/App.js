import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import { Routes, Route, Link} from 'react-router-dom';
import Clases from './components/Clases/Clases';
import Trainers from './components/Trainers/Trainers';

function App() {
  return (
    <div className="App">
      <App />
      {/* Agrego rutas para navegacion entre paginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="clases" element={<Clases />} />
        <Route path='trainers' element={<Trainers />} />
      </Routes>
      {/* Agrego header para mostrarlo en todas las paginas */}
      <Header />
      <footer>
        {/* Idem header pero footer */}
        <Footer />
      </footer>
    </div>
  );
}

export default App;
