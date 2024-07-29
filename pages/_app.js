import "../styles/globals.css";
import NavBar from "../components/NavBar/NavBar";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
  </div>
);

export default MyApp;
