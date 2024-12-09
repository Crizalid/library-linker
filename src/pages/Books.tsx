import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Books = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "978-0743273565",
      status: "Available",
      category: "Fiction",
      publishedYear: "1925",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "978-0446310789",
      status: "Borrowed",
      category: "Fiction",
      publishedYear: "1960",
    },
    {
      title: "1984",
      author: "George Orwell",
      isbn: "978-0451524935",
      status: "Available",
      category: "Science Fiction",
      publishedYear: "1949",
    },
  ];

  const handleBorrowRequest = (bookTitle: string) => {
    const userType = localStorage.getItem("userType");
    const username = localStorage.getItem("username") || "Utilisateur";

    if (userType === "student") {
      // Enregistrer la date d'emprunt
      const borrowDate = new Date();
      const returnDate = new Date(borrowDate);
      returnDate.setDate(returnDate.getDate() + 15); // Ajouter 15 jours

      // Enregistrer les informations d'emprunt dans le localStorage
      const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks") || "[]");
      borrowedBooks.push({
        title: bookTitle,
        borrowDate: borrowDate.toISOString(),
        returnDate: returnDate.toISOString(),
        reminded: false,
      });
      localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));

      // Notification immédiate pour l'emprunt
      toast({
        title: "Demande envoyée",
        description: `Votre demande pour "${bookTitle}" a été envoyée à l'administrateur. Date de retour prévue : ${returnDate.toLocaleDateString()}`,
        duration: 5000,
      });

      // Notification pour l'admin
      if (localStorage.getItem("userType") === "admin") {
        toast({
          title: "Nouvelle demande d'emprunt",
          description: `${username} souhaite emprunter "${bookTitle}"`,
          duration: 5000,
        });
      }

      // Configurer le rappel 24h avant la date de retour
      const reminderDate = new Date(returnDate);
      reminderDate.setDate(reminderDate.getDate() - 1);
      
      const now = new Date();
      const timeUntilReminder = reminderDate.getTime() - now.getTime();

      if (timeUntilReminder > 0) {
        setTimeout(() => {
          toast({
            title: "Rappel de retour",
            description: `Le livre "${bookTitle}" doit être retourné demain. Date limite : ${returnDate.toLocaleDateString()}`,
            duration: 10000,
          });
        }, timeUntilReminder);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Catalogue des Livres</h1>
          <p className="text-gray-600 mt-1">Consultez notre collection complète</p>
        </div>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="pl-10" placeholder="Rechercher un livre..." />
          </div>
          <Button variant="outline">Filtres</Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titre</TableHead>
                <TableHead>Auteur</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead>Année</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {books.map((book) => (
                <TableRow key={book.isbn}>
                  <TableCell className="font-medium">{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.category}</TableCell>
                  <TableCell>{book.publishedYear}</TableCell>
                  <TableCell className="text-gray-500">{book.isbn}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        book.status === "Available"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {book.status === "Available" ? "Disponible" : "Emprunté"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleBorrowRequest(book.title)}
                      disabled={book.status !== "Available"}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Emprunter
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Books;