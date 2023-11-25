
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './assets/Navbar/Navbar'
import About from './assets/About/About'
import Projects from './assets/Projects/Projects'
import Contact from './assets/Contact/Contact'
import Footer from './assets/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/" element={<About />}></Route>
          <Route path="/" element={<Projects />}></Route>
          <Route path="/" element={<Contact />}></Route>
          <Route path="/" element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
