// pages/_app.js
import "../styles/global/globals.css";
import "../styles/scss/bookshelf.scss";
import "../styles/sass/bookone.sass";
import "../styles/sass/booktwo.sass";

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default MyApp;
