import Mouse from "./Mouse";
import Dragon from "./Dragon";
import MouseWithDragon from "./MouseWithDragon";

export interface TPageProps {}

function MouseTracker() {
  return (
    <>
      <h1>移动鼠标!</h1>
      {/* <Mouse render={(mouse) => <Dragon mouse={mouse} />} /> */}
      <Mouse
        render={(mouse) => (
          <p>
            当前的鼠标位置是 ({mouse.x}, {mouse.y})
          </p>
        )}
      />
      {/* <MouseWithDragon /> */}
    </>
  );
}

export default MouseTracker;
