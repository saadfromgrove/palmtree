import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SSOCallback from "./pages/SSOCallback";
import OrganizationSignIn from "./pages/organization/SignIn";
import OrganizationSignUpFounder from "./pages/organization/Founder/SignUp";
import OrganizationSignUpFounderContact from "./pages/organization/Founder/SignUpContact";
import OrganizationSignUpFounderSecurity from "./pages/organization/Founder/SignUpSecurity";
import OrganizationSignUpFounderReview from "./pages/organization/Founder/SignUpReview";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sso-callback" element={<SSOCallback />} />
        /* Organization routes */
        <Route path="/organization/signin" element={<OrganizationSignIn />} />
        <Route
          path="/organization/signup/founder"
          element={<OrganizationSignUpFounder />}
        />
        <Route
          path="/organization/signup/founder/contact"
          element={<OrganizationSignUpFounderContact />}
        />
        <Route
          path="/organization/signup/founder/security"
          element={<OrganizationSignUpFounderSecurity />}
        />
        <Route
          path="/organization/signup/founder/review"
          element={<OrganizationSignUpFounderReview />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
