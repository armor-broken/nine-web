import React from "react";
import Dragon from "./Dragon";

export interface TPageProps {}

export interface TPageState {
  x: number;
  y: number;
}

class MouseWithDragon extends React.Component<TPageProps, TPageState> {
  constructor(props: TPageProps) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event: { clientX: number; clientY: number }) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        <Dragon mouse={this.state} />
      </div>
    );
  }
}

export default MouseWithDragon;
