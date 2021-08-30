import Header from "./header";
import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <div className="Layout" style={layoutStyle}>
      <Header />
      <div className="Content" style={contentStyle}>
        {props.children}
      </div>
      <Navbar />
    </div>
  );
}
const contentStyle = {
  flex: 1,
  display: "flex",
};
const layoutStyle = {
  display: "flex",
  flexDirection: "column",

  height: "100%",
  width: "100%",
  alignItems: "center",
};
