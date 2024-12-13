import { Card } from "@/components/ui/card";
import { BookOpen, Users, BookUp, Clock } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useAdmin } from "@/hooks/useAdmin";
import CsvImport from "@/components/CsvImport";

const StatCard = ({ icon: Icon, label, value, trend }: any) => (
  <Card className="p-6 animate-fade-in">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <h3 className="text-2xl font-semibold text-gray-900 mt-1">{value}</h3>
      </div>
      <div className="p-2 bg-primary-100 rounded-lg">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
    </div>
    <p className="text-sm text-gray-600 mt-2">
      <span className="text-green-500">{trend}</span> vs last month
    </p>
  </Card>
);

const Dashboard = () => {
  const { isAdmin } = useAdmin();
  const stats = [
    {
      icon: BookOpen,
      label: "Total Books",
      value: "12,543",
      trend: "+2.5%",
    },
    {
      icon: Users,
      label: "Active Members",
      value: "2,431",
      trend: "+3.2%",
    },
    {
      icon: BookUp,
      label: "Books Borrowed",
      value: "843",
      trend: "+1.8%",
    },
    {
      icon: Clock,
      label: "Due Returns",
      value: "129",
      trend: "-0.5%",
    },
  ];

  const monthlyBorrowData = [
    { month: "Jan", emprunts: 65 },
    { month: "Fév", emprunts: 45 },
    { month: "Mar", emprunts: 78 },
    { month: "Avr", emprunts: 51 },
    { month: "Mai", emprunts: 85 },
    { month: "Juin", emprunts: 79 },
  ];

  const categoryData = [
    { category: "Roman", emprunts: 150 },
    { category: "Science", emprunts: 89 },
    { category: "Histoire", emprunts: 75 },
    { category: "Poésie", emprunts: 45 },
    { category: "Technique", emprunts: 98 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Bienvenue sur votre système de gestion de bibliothèque</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {isAdmin && (
        <>
          <Card className="p-4">
            <CsvImport />
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Emprunts mensuels</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyBorrowData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="emprunts" 
                      stroke="#2563eb" 
                      strokeWidth={2}
                      name="Nombre d'emprunts"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Emprunts par catégorie</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar 
                      dataKey="emprunts" 
                      fill="#2563eb" 
                      name="Nombre d'emprunts"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Activités récentes</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Livre emprunté</p>
                      <p className="text-sm text-gray-600">John Doe a emprunté "Le Grand Gatsby"</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Livres les plus empruntés</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Le Grand Gatsby</p>
                      <p className="text-sm text-gray-600">Emprunté 24 fois ce mois</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
