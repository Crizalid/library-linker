import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

const Books = () => {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "978-0743273565",
      status: "Available",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "978-0446310789",
      status: "Borrowed",
    },
    {
      title: "1984",
      author: "George Orwell",
      isbn: "978-0451524935",
      status: "Available",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Books</h1>
          <p className="text-gray-600 mt-1">Manage your library's book collection</p>
        </div>
        <Button className="bg-primary-600 hover:bg-primary-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Book
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="pl-10" placeholder="Search books..." />
          </div>
          <Button variant="outline">Filters</Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Title</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Author</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">ISBN</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.isbn} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{book.title}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{book.author}</td>
                  <td className="py-3 px-4 text-gray-600">{book.isbn}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        book.status === "Available"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {book.status}
                    </span>
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

export default Books;