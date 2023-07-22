import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList() {
  const { books } = useContext(BooksContext);
  const { count, incrementCount } = useContext(BooksContext);

  // we still use props even with context
  // props is used for BookShow to know which book to display
  const renderedBooks = books?.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
