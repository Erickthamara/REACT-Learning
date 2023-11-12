import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <BookImage />
      <BookName />
      <BookAuthor />
    </article>
  );
};

const BookImage = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/81z7-AZGsyL._AC_UL320_.jpg"
      alt="An American beauty Novel"
    />
  );
};
const BookName = () => {
  return <h2>An American beauty</h2>;
};

const BookAuthor = () => {
  return <h3>Shana Abe</h3>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
