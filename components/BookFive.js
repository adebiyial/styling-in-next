// components/BookFive.js
export default function BookFive() {
  return (
    <div className="book-five">
      <div className="book-info">
        <p className="title">there was a country</p>
        <p className="author">Chinua Achebe</p>
      </div>
      <style jsx>{`
        .book-five {
          color: #fff;
          width: 106px;
          height: 448px;
          margin-right: 23px;
          background-color: #000;
          transform: rotate(4deg);
        }
      `}</style>
    </div>
  );
}
