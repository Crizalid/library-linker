import { Navigate, Outlet } from "react-router-dom";
import { useAdmin } from "@/hooks/useAdmin";
import { useToast } from "@/components/ui/use-toast";

const AdminRoute = () => {
  const { isAdmin } = useAdmin();
  const { toast } = useToast();

  if (!isAdmin) {
    toast({
      title: "Accès refusé",
      description: "Vous devez être administrateur pour accéder à cette page",
      variant: "destructive",
    });
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;