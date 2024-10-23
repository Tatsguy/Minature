import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import "./styles/gens.css";
import "./styles/comps.css";
import AppPage from "./pages/AppPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
