import { useState, useEffect } from "react";

export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    setIsAdmin(userType === "admin");
  }, []);
  
  return {
    isAdmin,
  };
};