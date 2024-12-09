import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen bg-[#f3f3f3] bg-opacity-90">
      <div className="win11-card m-2">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-auto p-4">
        <div className="win11-card p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;