import styles from '../styles/Footer.module.css';
import React from 'react';

const Footer = () => {
  const size = useWindowSize();
  return (
    <section className={styles.footerSection}>
      {size.width > 800 ? (
        <>
          <p className={styles.info}>© 2021 Rowdy Parrots | Developed by <a className={styles.itLink} href="https://it-techgroup.com" target="_blank">IT-TECHGROUP</a></p>
          <div className={styles.iconsWrapper}>
            <a href="https://discord.gg/FeNyShx8Vt" target="_blank"><img className={styles.icon} src="/img/discord.png"/></a>
            <a href="https://twitter.com/RowdyParrots?s=20" target="_blank"><img className={styles.icon} src="/img/twitter.png"/></a>
            <a href="https://www.instagram.com/nft.rowdyparrots/" target="_blank"><img className={styles.icon} src="/img/instagram.png"/></a>
            <a href="https://www.facebook.com/Rowdy-Parrots-100425959185482" target="_blank"><img className={styles.icon} src="/img/facebook.png"/></a>
          </div>
        </>
        ) : (
          <div className={styles.footerMobile}>
            <div className={styles.iconsWrapperMobile}>
              <a href="https://discord.gg/FeNyShx8Vt" target="_blank"><img className={styles.icon} src="/img/discord.png"/></a>
              <a href="https://twitter.com/RowdyParrots?s=20" target="_blank"><img className={styles.icon} src="/img/twitter.png"/></a>
              <a href="https://www.instagram.com/nft.rowdyparrots/" target="_blank"><img className={styles.icon} src="/img/instagram.png"/></a>
              <a href="https://www.facebook.com/Rowdy-Parrots-100425959185482" target="_blank"><img className={styles.icon}  src="/img/facebook.png"/></a>
            </div>
            <hr style={{width: '50%', color: 'white'}}/>
            <p className={styles.infoMobile}>© 2021 Rowdy Parrots | Developed by <a className={styles.itLinkMobile} href="https://it-techgroup.com" target="_blank">IT-TECHGROUP</a></p>
          </div>
        )}
    </section>
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

export default Footer
