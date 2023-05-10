import { Component } from "react";

export default class TextWrapper extends Component<{
  children: any;
  className: string;
}> {
  static defaultProps = { className: "" };
  render() {
    const { children, className } = this.props;
    return (
      <div
        className={`bg-primary outline outline-1 outline-accent p-3 rounded-xl ${className}`}
      >
        {children}
      </div>
    );
  }
}
