import { Card } from "@/components/ui/card";
import CsvImport from "@/components/CsvImport";

const Students = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Gestion des élèves</h1>
        <p className="text-gray-600 mt-1">
          Gérez les comptes élèves et importez de nouveaux élèves via CSV
        </p>
      </div>

      <Card className="p-6">
        <CsvImport />
      </Card>
    </div>
  );
};

export default Students;