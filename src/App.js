import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  // state is an array
  const [books, setBooks] = useState([]);

  // delete object with the given id (use filter)
  const deleteBookById = (id) => {
    // false statements get removed
    const updatedBooks = books.filter((book) => {
      return book.id != id;
    });

    setBooks(updatedBooks);
  };

  // pass down as prop called onEdit to bookList (then to BookShow, then to BookEdit)
  const editBookById = (id, newTitle) => {
    // false statements get removed
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  // when called, sends a title parameter as input ; this handles create book event
  const createBook = (title) => {
    // adding an object to the array
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  // onCreate can be called whatever, it's a prop name. will call createBook function
  // onDelete is also prop name. this is what BookList receives
  // pass list of books as a prop called books in BookList component
  return (
    <div className="app">
      <h1>Marili the Tree</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
