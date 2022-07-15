import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import App from "./App";
import Blog from "./Routes/blog";
import Blogs from "./Routes/blogs";
import About from "./Routes/about";

let cache = {};

const importAll = (r) => r.keys().forEach((key) => (cache[key] = r(key)));
importAll(require.context("./files", true, /\.md$/));

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blogs samples={Object.keys(cache)} />} />
        {Object.keys(cache).map(function (key, index) {
          let path = key.slice(2, -3);
          return (
            <Route
              key={index}
              path={`/blog/${path}`}
              element={<Blog html={cache[key].default} />}
            />
          );
        })}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
