import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Books } from "./books";
import { Book } from "./Book";

const BookList = () => {
  //const indexedArray = myArray.map((value, index) => ({ index, value }));

  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {Books.map((book, index) => {
          //const { image, author, book: title, id } = book;

          return <Book {...book} key={book.id} index={index + 1} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
