import * as React from "react";

export class Footer extends React.Component {
  render() {
    const footerStyle = {
      height: "150px",
      backgroundColor: "DodgerBlue"
    }

    return (
      <div style={footerStyle}>
        <p>This is a Footer</p>
      </div>
    )
  }
}
