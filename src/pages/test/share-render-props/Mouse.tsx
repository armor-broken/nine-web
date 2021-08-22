import React from "react";

export interface TPageProps {
  render: (state: any) => any;
}

export interface TPageState {
  x: number;
  y: number;
}

class Mouse extends React.Component<TPageProps, TPageState> {
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
        {this.props.render(this.state)}
        {/* <p>
          当前的鼠标位置是 ({this.state.x}, {this.state.y})
        </p> */}
      </div>
    );
  }
}

export default Mouse;
