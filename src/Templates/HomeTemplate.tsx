import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuSide from "./components/MenuSide";

type Props = {};

function HomeTemplate({}: Props) {
  return (
    <div style={{ width: "100vw" }}>
      <Header />

      <div
        style={{
          padding: "50px 200px",
        }}
      >
        <div className="flex flex-row justify-between gap-10">
          <MenuSide />
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeTemplate;
