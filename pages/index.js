// pages/index.js
import BookFive from "../components/BookFive";
import BookFour from "../components/BookFour";
import BookOne from "../components/BookOne";
import BookSix from "../components/BookSix";
import BookThree from "../components/BookThree";
import BookTwo from "../components/BookTwo";

export default function Home() {
  return (
    <div className="home">
      <div className="the-bookshelf">
        <div className="bookshelf-wrap">
          <div className="bookshelf">
            <BookOne />
            <BookTwo />
            <BookThree />
            <BookFour />
            <BookFive />
            <BookSix />
          </div>
        </div>
      </div>
    </div>
  );
}
