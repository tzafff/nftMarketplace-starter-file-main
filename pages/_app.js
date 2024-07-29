import "../styles/globals.css";

import {NavBar, Footer} from '../components/index'
const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
      <Footer />
  </div>
);

export default MyApp;
