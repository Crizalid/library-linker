import { Link, useLocation } from "react-router-dom";
import { BookOpen, LayoutDashboard, Search, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NavigationButtons = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: BookOpen, label: "Books", path: "/books" },
    { icon: Search, label: "Search", path: "/search" },
    ...(isLoggedIn ? [{ icon: UserCircle, label: "Profile", path: "/profile" }] : []),
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
      {menuItems.map((item) => (
        <Link key={item.path} to={item.path}>
          <Button
            variant={location.pathname === item.path ? "default" : "outline"}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
              location.pathname === item.path && "shadow-oneui-colored"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default NavigationButtons;