import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/gens.css";
import "./styles/comps.css";
import Home from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import AppPage from "./pages/AppPage";
import EditorPage from "./pages/EditorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/app" element={<AppPage />}>
          <Route path=":id" element={<EditorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
