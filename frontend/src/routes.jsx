import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Schedule from "./pages/Schedule";
import Fees from "./pages/Fees";
import Enrollment from "./pages/Enrollment";
import Contact from "./pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/enrollment" element={<Enrollment />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}