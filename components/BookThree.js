// components/BookThree.js
import BookThreeStyles from "../styles/modules/BookThree.module.css";

export default function BookThree() {
  return (
    <div className={BookThreeStyles["book-three"]}>
      <div className="book-info">
        <p className="title">the revolt of the public</p>
        <p className="author">Martin Gurri</p>
      </div>
    </div>
  );
}
