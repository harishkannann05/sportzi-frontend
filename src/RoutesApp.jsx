import { Routes, Route } from "react-router-dom";
import Nav from "./nav";
import App from "./App";
import Login from "./login";
import Signup from "./signup";
import TeamRegister from "./TeamRegister";


export default function RoutesApp() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/team-register" element={<TeamRegister />} />
      </Routes>
    </>
  );
}
