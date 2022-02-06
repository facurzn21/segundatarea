import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import { Routes, Route, Link} from 'react-router-dom';
import Clases from './components/Clases/Clases';
import Trainers from './components/Trainers/Trainers';

function App() {

  let content = <Home />;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="clases" element={<Clases />} />
        <Route path='/trainers' element={<Trainers />} />
      </Routes>
      <Header />
     
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
