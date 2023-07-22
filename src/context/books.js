import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  // DELETE BOOKS 
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    // false statements get removed
    const updatedBooks = books.filter((book) => {
      return book.id != id;
    });

    setBooks(updatedBooks);
  };

  // EDIT BOOK 
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    console.log(response);

    // false statements get removed
    // take entire book object (response) and use that object to update our state
    /// ...response.data is this updated object (takes all properties and values)
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };


  // when called, sends a title parameter as input ; this handles create book event
  const createBook = async (title) => {
    // adding an object to the array
    // json server will generate ID for us
    // make request and get response ( new book)
    // take response and add into books state
    const response = await axios.post("http://localhost:3001/books", { title });

    console.log(response);

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  // the value prop that is shared through context for whole app
  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  // value prop is what shares with rest of app- we want to share books array
  return <BooksContext.Provider value={{valueToShare}}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
