import { Card } from "@/components/ui/card";
import { BookOpen, Users, BookUp, Clock } from "lucide-react";

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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to your library management system</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Book borrowed</p>
                  <p className="text-sm text-gray-600">John Doe borrowed "The Great Gatsby"</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Books</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">The Great Gatsby</p>
                  <p className="text-sm text-gray-600">Borrowed 24 times this month</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;