import '../styles/globals.css'
import AOS from "aos";
import React from 'react';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 800
    });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
