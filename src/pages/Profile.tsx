import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Database } from "@/integrations/supabase/types";

type Profile = Database['public']['Tables']['profiles']['Row'];

const Profile = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/login");
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select()
        .eq('id', user.id)
        .single();

      if (profile) {
        setUserEmail(profile.email || '');
        setUserRole(profile.user_type || '');
      }
      
      setIsLoading(false);
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userType");
    
    toast({
      title: "Déconnexion réussie",
      description: "À bientôt !",
    });
    
    navigate("/login");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Mon Profil
            <Badge variant={userRole === 'admin' ? 'destructive' : 'secondary'}>
              {userRole === 'admin' ? 'Administrateur' : 'Élève'}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-gray-600">{userEmail}</p>
          </div>
          <div>
            <h3 className="font-medium">Rôle</h3>
            <p className="text-gray-600">{userRole === 'admin' ? 'Administrateur' : 'Élève'}</p>
          </div>
          <div>
            <h3 className="font-medium">Mes emprunts en cours</h3>
            <p className="text-gray-600">Aucun emprunt en cours</p>
          </div>
          <Button variant="destructive" onClick={handleLogout}>
            Se déconnecter
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;