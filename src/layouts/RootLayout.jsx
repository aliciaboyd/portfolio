import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="bg">
      <NavBar />
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
