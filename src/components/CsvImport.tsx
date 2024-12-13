import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const CsvImport = () => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "text/csv") {
      toast({
        title: "Format invalide",
        description: "Veuillez sélectionner un fichier CSV",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target?.result;
        if (typeof text !== "string") return;

        // Traitement basique du CSV (à adapter selon le format attendu)
        const rows = text.split("\n").map(row => row.split(","));
        const students = rows.slice(1).map(row => ({
          name: row[0],
          email: row[1],
          class: row[2]
        }));

        // Simuler l'enregistrement (à remplacer par votre logique)
        console.log("Élèves importés:", students);
        
        toast({
          title: "Import réussi",
          description: `${students.length} élèves ont été importés avec succès`,
        });
      };
      reader.readAsText(file);
    } catch (error) {
      toast({
        title: "Erreur lors de l'import",
        description: "Une erreur est survenue lors de l'import du fichier",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold">Importer des comptes élèves</h2>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="relative"
          disabled={isUploading}
        >
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <Upload className="w-4 h-4 mr-2" />
          {isUploading ? "Import en cours..." : "Sélectionner un fichier CSV"}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Format attendu: nom,email,classe
      </p>
    </div>
  );
};

export default CsvImport;