import { Component } from "react";

class ResponseGrid extends Component<{
  children: any;
  orientation: string;
  className: string;
}> {
  static defaultProps = { orientation: "block", className: "" };

  render() {
    const { children, orientation, className } = this.props;
    if (orientation === "list") {
      return <div className={`flex-col flex ${className}`}>{children}</div>;
    } else {
      return (
        <div
          className={`grid  grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6 ${className}`}
        >
          {children}
        </div>
      );
    }
  }
}

export default ResponseGrid;
