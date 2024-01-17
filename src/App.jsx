import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import "preline/preline";
import Home from "./pages/Home";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
