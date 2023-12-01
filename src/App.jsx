import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/Navbar/Navbar";
import About from "./assets/About/About";
import Projects from "./assets/Projects/Projects";
import Contact from "./assets/Contact/Contact";
import Footer from "./assets/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className=" bg-slate-100  dark:text-white font-primary">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
