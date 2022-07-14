import React from "react";
import ReactMarkdown from "https://esm.sh/react-markdown@7";
import remarkGfm from "https://esm.sh/remark-gfm@3";
import rehypeHighlight from "https://esm.sh/rehype-highlight@5";

export class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "",
    };
  }

  componentDidMount() {
    const file = this.props.file;

    fetch(`/public/files/${file}.md`)
      .then((res) => res.text())
      .then((res) => {
        this.setState({ markdown: res });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <main className="p-4 markdown-body">
        <ReactMarkdown
          children={this.state.markdown}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        />
      </main>
    );
  }
}

export default Blog;
