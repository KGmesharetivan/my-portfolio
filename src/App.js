import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <About />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
