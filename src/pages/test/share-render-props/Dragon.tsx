const imageUrl =
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201403%2F30%2F20140330172252_KAwFR.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631976030&t=36528b86cccc1b05fabcb03b66fd48ec";

type PageProps = {
  mouse: {
    x: number;
    y: number;
  };
};

export default function Dragon(props: PageProps) {
  const { x, y } = props.mouse;
  return (
    <img
      src={imageUrl}
      alt="dragon"
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: "150px",
        height: "100px",
      }}
    />
  );
}
