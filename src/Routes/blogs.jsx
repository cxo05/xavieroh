import * as React from "react";
import { Link } from "react-router-dom";

import routes from "../../public/files";

export class Blogs extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <main className="p-4 markdown-body">
        <div>Blog Posts</div>
        {routes.map((route) => (
          <div key={route}>
            <Link
              to={"/blog/" + route}
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100"
            >
              <span className="ml-3">{route}</span>
            </Link>
          </div>
        ))}
      </main>
    );
  }
}

export default Blogs;
