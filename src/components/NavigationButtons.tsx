import { Link, useLocation } from "react-router-dom";
import { BookOpen, LayoutDashboard, Search, UserCircle, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAdmin } from "@/hooks/useAdmin";

const NavigationButtons = () => {
  const location = useLocation();
  const { isAdmin } = useAdmin();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const menuItems = [
    { 
      icon: LayoutDashboard, 
      label: "Dashboard", 
      path: "/",
      color: "bg-primary hover:bg-primary/90"
    },
    { 
      icon: BookOpen, 
      label: "Books", 
      path: "/books",
      color: "bg-secondary hover:bg-secondary/90"
    },
    { 
      icon: Search, 
      label: "Search", 
      path: "/search",
      color: "bg-accent hover:bg-accent/90"
    },
    ...(isLoggedIn ? [{
      icon: UserCircle,
      label: "Profile",
      path: "/profile",
      color: "bg-primary-600 hover:bg-primary-700"
    }] : []),
    ...(isAdmin ? [{
      icon: Users,
      label: "Gérer les élèves",
      path: "/students",
      color: "bg-secondary-600 hover:bg-secondary-700"
    }] : []),
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
      {menuItems.map((item) => (
        <Link key={item.path} to={item.path}>
          <Button
            variant={location.pathname === item.path ? "default" : "outline"}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
              location.pathname === item.path ? `${item.color} shadow-oneui-colored` : "hover:bg-gray-100"
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