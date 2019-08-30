import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <main role="main" className="container">
        <Route exact path="/" component={HomePage} />
      </main>
      <FooterComponent />
    </Router>
  );
}

export default App;
