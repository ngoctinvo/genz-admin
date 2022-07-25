import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuSide from "./components/MenuSide";

type Props = {};

function HomeTemplate({}: Props) {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <MenuSide />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default HomeTemplate;
