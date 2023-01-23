import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home";
import Fysioterapi from "./views/Fysioterapi";
import Træning from "./views/Træning";
import Vægttab from "./views/Vægttab";
import Header from './components/Header';
import Footer from './components/Footer';
import Priser from './views/Priser';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fysioterapi" element={<Fysioterapi />} />
          <Route path="/træning" element={<Træning />} />
          <Route path="/vægttab" element={<Vægttab />} />
          <Route path='/Priser' element={<Priser />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
