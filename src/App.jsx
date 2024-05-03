import { BrowserRouter, Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./assets/Navbar/Navbar";
import About from "./assets/About/About";
import Projects from "./assets/Projects/Projects";
import Contact from "./assets/Contact/Contact";
import Footer from "./assets/Footer/Footer";
// import Sample from "./assets/Sample/Sample";
// import Props from "./assets/Props/Props";
// import PropsTwo from "./assets/Props/PropsTwo";
// // import Usecontext from "./assets/Props/Usecontext";
// import StatefulContext from "./assets/Props/StatefulContext";
// import Upload from "./assets/Upload/Upload";
// import ErrorPage from "./assets/ErrorPage/ErrorPage";
// import Login from "./assets/Login/Login";

function App() {
  return (
    <>
    
          {/* <StatefulContext /> */}
          {/* <Usecontext /> */}
          {/* <Props />
          <PropsTwo />  */}
          <Navbar />

          <About />
          <Projects />
          <Contact />
          <Footer />
          {/* <Route path="/" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload />} /> */}

          {/* <Sample /> */}
      
    </>
  );
}

export default App;
