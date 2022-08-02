import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuSide from "../Components/MenuSide/MenuSide";

type Props = {};

function HomeTemplate({}: Props) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1f1f1f" }}>
      <Header />

      <div
        className="mx-12 md:mx-24 lg:mx-36"
        style={{
          maxWidth: "calc(100% - 288px)",
        }}
      >
        <div className="flex flex-wrap min-h-screen">
          <MenuSide />
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeTemplate;
