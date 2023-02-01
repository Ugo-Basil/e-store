import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="py-2 px-8 flex flex-col min-h-screen max-w-8xl mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}
