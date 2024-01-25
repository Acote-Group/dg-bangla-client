import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import "preline/preline";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ScrollToTop from "react-scroll-to-top";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop
        color="#FFFF"
        width="40px"
        smooth
        className="!bg-primary"
        // style={{"border-radius": "100px"}}
      />
    </>
  );
}

export default App;
