import React from "react";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-slate-50 text-slate-800">
      <Hero />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
