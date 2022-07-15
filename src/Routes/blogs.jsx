import * as React from "react";
import { Link } from "react-router-dom";

export class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      samples: this.props.samples,
    };
  }

  render() {
    return (
      <main className="p-4 markdown-body">
        <div>Blog Posts</div>
        {this.state.samples.map((key) => {
          let path = key.slice(2, -3);
          return (
            <div key={path}>
              <Link
                to={"/blog/" + path}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100"
              >
                <span className="ml-3">{path}</span>
              </Link>
            </div>
          );
        })}
      </main>
    );
  }
}

export default Blogs;
