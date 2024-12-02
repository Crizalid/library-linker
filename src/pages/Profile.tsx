import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const email = localStorage.getItem("userEmail");

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (email) {
      setUserEmail(email);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    toast({
      title: "Déconnexion réussie",
      description: "À bientôt !",
    });
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Mon Profil</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-gray-600">{userEmail}</p>
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