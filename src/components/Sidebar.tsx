import { Link, useLocation } from "react-router-dom";
import { BookOpen, Users, LayoutDashboard, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: BookOpen, label: "Books", path: "/books" },
    { icon: Users, label: "Members", path: "/members" },
    { icon: Search, label: "Search", path: "/search" },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <BookOpen className="h-6 w-6 text-primary-600" />
        <h1 className="text-xl font-semibold text-gray-900">LibrarySystem</h1>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-primary-100 text-primary-800"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;