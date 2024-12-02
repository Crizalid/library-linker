import { Link, useLocation } from "react-router-dom";
import { BookOpen, Users, LayoutDashboard, Search, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAdmin } from "@/hooks/useAdmin";

const Sidebar = () => {
  const location = useLocation();
  const { isAdmin } = useAdmin();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: BookOpen, label: "Books", path: "/books" },
    ...(isAdmin ? [{ icon: Users, label: "Members", path: "/members" }] : []),
    { icon: Search, label: "Search", path: "/search" },
    ...(isLoggedIn ? [{ icon: UserCircle, label: "Profile", path: "/profile" }] : []),
  ];

  return (
    <aside className="bg-white w-64 min-h-screen p-4 border-r">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100",
              location.pathname === item.path && "bg-gray-100 text-gray-900"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;