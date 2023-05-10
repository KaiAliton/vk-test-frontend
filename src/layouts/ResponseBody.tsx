import { Component } from "react";
import { NavBar } from "../components/NavBar.tsx";

class ResponseBody extends Component<{ children: any }> {
  render() {
    const { children } = this.props;
    return (
      <div className="w-4/5 flex mx-auto h-full">
        <aside className="w-1/3 h-full px-5 py-5 sticky top-0 z-10">
          <NavBar />
        </aside>
        <div className="w-3/4 h-full z-5">{children}</div>
      </div>
    );
  }
}

export default ResponseBody;
