import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Books = [
  {
    author: "Shana Abe",
    book: "An American beauty",
    image: "./Images/Image-1.jpg",
    id: 1,
  },

  {
    author: "Evie Woods",
    book: "The Lost Bookshop",
    image: "https://m.media-amazon.com/images/I/91GYtFqr3GL._AC_UL320_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const childFunc = () => console.log("I am a child function");
  const findBook = (id) => {
    const bookName = Books.find((book) => {
      return book.id === id;
    });
    console.log(bookName.book);
  };

  return (
    <section className="booklist">
      {Books.map((book) => {
        //const { image, author, book: title, id } = book;
        return (
          <Book
            {...book}
            key={book.id}
            childFunc={childFunc}
            findBook={findBook}
          />
        );
      })}
    </section>
  );
};

const Book = (props) => {
  const { author, image, book, children, childFunc, findBook, id } = props;
  const getSingleBook = () => findBook(id);
  return (
    <article className="book">
      <img src={image} alt="An American beauty Novel" />
      <h2>{book}</h2>
      <h3>{author}</h3>
      {/* {children} */}
      <button onClick={getSingleBook}>Click Me</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

/* const list1 = ["Holy", "Ghost", "Fire"];
const list = ["Shaaa", ...list1];
console.log(list);

const myObject1 = {
  name: "John",
  age: 20,
};

const myObject2 = { ...myObject1, car: "ferrari" };

console.log(myObject2); */
