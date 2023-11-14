import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  author: "Shana Abe",
  book: "An American beauty",
  image: "./Images/Image-1.jpg",
};

const secondBook = {
  author: "Evie Woods",
  book: "The Lost Bookshop",
  image: "https://m.media-amazon.com/images/I/91GYtFqr3GL._AC_UL320_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        book={firstBook.book}
        image={firstBook.image}
      />
      <Book
        author={secondBook.author}
        book={secondBook.book}
        image={secondBook.image}
      />
    </section>
  );
};

const Book = (props) => {
  const { author, image, book } = props;
  return (
    <article className="book">
      <img src={image} alt="An American beauty Novel" />
      <h2>{book}</h2>
      <h3>{author}</h3>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
