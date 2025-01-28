import { Outlet } from "react-router-dom";
import Header from "./src/Component/Header";
import Sidebar from "./src/Component/Sidebar";
import Footer from "./src/Component/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      {<Outlet />}
      <Footer />
    </>
  );
}
