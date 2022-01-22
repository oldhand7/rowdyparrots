import styles from '../styles/Navbar.module.css';
import React from 'react';

const Navbar = () => {

  const size = useWindowSize();
  const [renderNavbar, setRenderNavbar] = React.useState(false);
  if(size.width > 600 && renderNavbar){
    setRenderNavbar(false);
  }

  return (
    <div className={styles.navbar} style={size.width > 600 ? {} : {background: '#0A1412'}}>
      <p className={styles.name}>Rowdy Parrots</p>
      {size.width > 600 ? (
        <nav className={styles.navigation}>
          <a className={styles.navlink} href="#home">Home</a>
          <a className={styles.navlink} href="#about">About</a>
          <a className={styles.navlink} href="#rarity">Rarity</a>
          <a className={styles.navlink} href="#roadmap">Roadmap</a>
          <a className={styles.navlink} href="#faq">FAQ</a>
        </nav>
      ) : (
        <button className={styles.navToggler} onClick={()=>{setRenderNavbar(!renderNavbar)}}>☰</button>
      )}
      {renderNavbar ? (
        <nav className={styles.navigationMobile}>
          <a className={styles.navlink} href="#home">HOME</a>
          <a className={styles.navlink} href="#about">ABOUT</a>
          <a className={styles.navlink} href="#rarity">RARITY</a>
          <a className={styles.navlink} href="#roadmap">ROADMAP</a>
          <a className={styles.navlink} href="#faq">FAQ</a>
        </nav>
      ) : ''}
    </div>
  )
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default Navbar
