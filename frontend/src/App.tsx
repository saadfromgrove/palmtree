import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SSOCallback from "./pages/SSOCallback";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/sso-callback" element={<SSOCallback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
