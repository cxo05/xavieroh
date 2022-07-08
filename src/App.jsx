import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import { Header } from "./Layouts/header.jsx";
import { Footer } from "./Layouts/footer.jsx";
import { Sidebar } from "./Layouts/sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Sidebar-with-content">
        <Sidebar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to React!</h3>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;
