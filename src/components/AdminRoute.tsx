import { Navigate } from "react-router-dom";
import { useAdmin } from "@/hooks/useAdmin";
import { useToast } from "@/components/ui/use-toast";

const AdminRoute = ({ children }: { children: React.ReactElement }) => {
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

  return children;
};

export default AdminRoute;