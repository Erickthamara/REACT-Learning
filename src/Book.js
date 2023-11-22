export const Book = (props) => {
  const { author, image, book, index } = props;

  return (
    <article className="book">
      <img src={image} alt="An American beauty Novel" />
      <h2>{book}</h2>
      <h3>{author}</h3>
      <h3 className="number">{index}</h3>
    </article>
  );
};
