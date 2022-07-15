import * as React from "react";
import { Header } from "./Layouts/header.jsx";
import { Footer } from "./Layouts/footer.jsx";
import { Sidebar } from "./Layouts/sidebar";
import { Outlet } from "react-router-dom";
import "./Styles/output.css";

function App() {
  return (
    <div className="flex flex-col min-h-full px-4 mx-auto w-full max-w-6xl bg-white">
      <Header />
      <div>
        <Sidebar />
        <div style={{ float: "right", width: "calc(100% - 200px)" }}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
