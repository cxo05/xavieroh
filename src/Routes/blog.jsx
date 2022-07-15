import React from "react";

export class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      html: this.props.html,
    };
  }

  render() {
    return (
      <main className="p-4 markdown-body">
        <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
      </main>
    );
  }
}

export default Blog;
