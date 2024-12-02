import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Plus, MoreVertical } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Members = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const members = [
    {
      name: "John Doe",
      email: "john@example.com",
      membershipId: "M001",
      status: "Active",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      membershipId: "M002",
      status: "Active",
    },
    {
      name: "Bob Johnson",
      email: "bob@example.com",
      membershipId: "M003",
      status: "Inactive",
    },
  ];

  const handleBorrowRequest = (memberName: string) => {
    toast({
      title: "Demande d'emprunt",
      description: `Demande d'emprunt initiée pour ${memberName}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Membres</h1>
          <p className="text-gray-600 mt-1">Gérer les membres de la bibliothèque</p>
        </div>
        <Button className="bg-primary-600 hover:bg-primary-700">
          <Plus className="h-4 w-4 mr-2" />
          Ajouter un membre
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                className="pl-10" 
                placeholder="Rechercher des livres..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <BookOpen className="h-4 w-4 mr-2" />
              Catalogue
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Emprunts rapides</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Livres disponibles</span>
              <span className="font-medium">42</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Emprunts en cours</span>
              <span className="font-medium">12</span>
            </div>
            <Button className="w-full" onClick={() => handleBorrowRequest("Nouveau membre")}>
              <Plus className="h-4 w-4 mr-2" />
              Nouvelle demande d'emprunt
            </Button>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Nom</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Email</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">ID Membre</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Statut</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.membershipId} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{member.name}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{member.email}</td>
                  <td className="py-3 px-4 text-gray-600">{member.membershipId}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        member.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleBorrowRequest(member.name)}
                      >
                        <BookOpen className="h-4 w-4 mr-2" />
                        Emprunter
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Members;