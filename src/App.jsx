import * as React from "react";
import "./output.css";
import { Header } from "./Layouts/header.jsx";
import { Footer } from "./Layouts/footer.jsx";
import { Sidebar } from "./Layouts/sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 mx-auto w-full max-w-6xl bg-white">
        <Header />
        <div>
          <Sidebar />
          <div style={{ float: "right", width: "calc(100% - 200px)" }}>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
