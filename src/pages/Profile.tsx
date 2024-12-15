import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          navigate("/login");
          return;
        }

        const { data: profile } = await supabase
          .from('profiles')
          .select('user_type')
          .eq('id', user.id)
          .single();

        setUserRole(profile?.user_type || null);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la déconnexion",
        variant: "destructive",
      });
      return;
    }

    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Erreur",
          description: "Utilisateur non trouvé",
          variant: "destructive",
        });
        return;
      }

      // Delete the user's auth account
      const { error: deleteError } = await supabase.auth.admin.deleteUser(user.id);

      if (deleteError) throw deleteError;

      toast({
        title: "Compte supprimé",
        description: "Votre compte a été supprimé avec succès",
      });

      // Logout and redirect
      await handleLogout();
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Mon Profil</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-medium">Type de compte</h3>
            <p className="text-gray-600">
              {userRole === 'admin' ? 'Administrateur' : 'Élève'}
            </p>
          </div>
          <div>
            <h3 className="font-medium">Mes emprunts en cours</h3>
            <p className="text-gray-600">Aucun emprunt en cours</p>
          </div>
          <div className="space-y-2">
            <Button 
              variant="destructive" 
              onClick={handleLogout}
              className="rounded-none"
            >
              Se déconnecter
            </Button>
            {userRole === 'admin' && (
              <Button 
                variant="destructive" 
                onClick={handleDeleteAccount}
                className="ml-2 rounded-none"
              >
                Supprimer le compte
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;