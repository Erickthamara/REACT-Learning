import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const author = "Shana Abe";
const book = "An American beauty";
const image = "./Images/Image-1.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} book={book} image={image} />
      <Book author={author} book={book} image={image} />
      <Book author={author} book={book} image={image} />
      <Book author={author} book={book} image={image} />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.image} alt="An American beauty Novel" />
      <h2>{props.book}</h2>
      <h3>{props.author}</h3>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
