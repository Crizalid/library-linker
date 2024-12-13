import { Outlet } from "react-router-dom";
import NavigationButtons from "./NavigationButtons";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-background">
      <div className="oneui-card m-2 p-4">
        <NavigationButtons />
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