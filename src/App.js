import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  // onCreate can be called whatever, it's a prop name. will call createBook function
  // onDelete is also prop name. this is what BookList receives
  // pass list of books as a prop called books in BookList component
  return (
    <div className="app">
      <h1>My Book List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
