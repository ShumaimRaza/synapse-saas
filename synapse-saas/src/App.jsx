import { useState } from "react";
import LandingPage     from "./pages/LandingPage";
import LoginPage       from "./pages/LoginPage";
import SignupPage      from "./pages/SignupPage";
import ContactPage     from "./pages/Contactpage";
import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  const [page, setPage] = useState("landing");

  return (
    <>
      {page === "landing" && (
        <LandingPage
          onLogin={()   => setPage("login")}
          onSignup={()  => setPage("signup")}
          onContact={()  => setPage("contact")}
        />
      )}
      {page === "login" && (
        <LoginPage
          onLogin={()    => setPage("dashboard")}
          onBack={()     => setPage("landing")}
          onGoSignup={()  => setPage("signup")}
        />
      )}
      {page === "signup" && (
        <SignupPage
          onSignup={()  => setPage("dashboard")}
          onBack={()    => setPage("landing")}
          onGoLogin={()  => setPage("login")}
        />
      )}
      {page === "contact" && (
        <ContactPage onBack={() => setPage("landing")} />
      )}
      {page === "dashboard" && (
        <DashboardLayout onLogout={() => setPage("landing")} />
      )}
    </>
  );
}