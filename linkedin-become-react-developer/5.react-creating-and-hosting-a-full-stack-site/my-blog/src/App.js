import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import FourOhFour from "./pages/FourOhFour";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <main role="main" className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles" component={ArticlesListPage} />
          <Route path="/article/:id" component={ArticlePage} />
          <Route component={FourOhFour} />
        </Switch>
      </main>
      <FooterComponent />
    </Router>
  );
}

export default App;
