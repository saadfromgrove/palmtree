import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SSOCallback from "./pages/SSOCallback";
import OrganizationSignIn from "./pages/organization/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/sso-callback" element={<SSOCallback />} />

        <Route path="/organization/signin" element={<OrganizationSignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
