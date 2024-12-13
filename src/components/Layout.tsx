import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen bg-background">
      <div className="oneui-card m-2">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-auto p-4">
        <div className="oneui-card p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;