import { useState } from "react";

export const useAdmin = () => {
  // Pour la démonstration, on utilise un état local
  // Dans une vraie application, ceci viendrait d'un système d'authentification
  const [isAdmin] = useState(false);
  
  return {
    isAdmin,
  };
};