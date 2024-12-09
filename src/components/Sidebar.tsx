import { Link, useLocation } from "react-router-dom";
import { BookOpen, LayoutDashboard, Search, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAdmin } from "@/hooks/useAdmin";

const Sidebar = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: BookOpen, label: "Books", path: "/books" },
    { icon: Search, label: "Search", path: "/search" },
    ...(isLoggedIn ? [{ icon: UserCircle, label: "Profile", path: "/profile" }] : []),
  ];

  return (
    <aside className="w-64 min-h-screen p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-white/50 transition-all duration-200",
              location.pathname === item.path && "bg-white/70 text-primary shadow-sm"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;