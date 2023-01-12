import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home";
import Coaching from "./views/Coaching";
import Fysioterapi from "./views/Fysioterapi";
import Træning from "./views/Træning";
import Vægttab from "./views/Vægttab";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/fysioterapi" element={<Fysioterapi />} />
          <Route path="/træning" element={<Træning />} />
          <Route path="/vægttab" element={<Vægttab />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
