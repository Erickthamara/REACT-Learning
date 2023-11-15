import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Books = [
  {
    author: "Shana Abe",
    book: "An American beauty",
    image: "./Images/Image-1.jpg",
  },

  {
    author: "Evie Woods",
    book: "The Lost Bookshop",
    image: "https://m.media-amazon.com/images/I/91GYtFqr3GL._AC_UL320_.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {Books.map((book) => {
        const { image, author, book: title } = book;
        return <Book image={image} author={author} book={title} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { author, image, book, children } = props;
  return (
    <article className="book">
      <img src={image} alt="An American beauty Novel" />
      <h2>{book}</h2>
      <h3>{author}</h3>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
