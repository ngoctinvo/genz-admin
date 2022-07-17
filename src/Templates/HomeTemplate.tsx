import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

type Props = {};

function HomeTemplate({}: Props) {
  return (
    <>
      <div className="flex flex-row">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default HomeTemplate;
