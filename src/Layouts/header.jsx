import * as React from "react";

import config from "../Files/config.json";

export class Header extends React.Component {
  render() {
    return (
      <div className="h-24 flex items-center border-b-2 mb-4">
        <p className="px-3 text-2xl font-semibold">{config.name}</p>
      </div>
    );
  }
}
