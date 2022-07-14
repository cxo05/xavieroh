import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Blog from "./Routes/blog";
import Blogs from "./Routes/blogs";
import About from "./Routes/about";

import routes from "../public/files";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blogs />} />
        {routes.map((route) => (
          <Route
            key={route}
            path={`/blog/${route}`}
            element={<Blog file={route} />}
          />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
