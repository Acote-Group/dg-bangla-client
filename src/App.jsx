import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import "preline/preline";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
