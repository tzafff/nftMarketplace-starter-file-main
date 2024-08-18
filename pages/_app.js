import "../styles/globals.css";

import {NFTMarketPlaceProvider} from '../Context/NFTMarketPlaceContext'
import {NavBar, Footer} from '../components/index'
const MyApp = ({ Component, pageProps }) => (
  <div>
      <NFTMarketPlaceProvider>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
      </NFTMarketPlaceProvider>
  </div>
);

export default MyApp;
