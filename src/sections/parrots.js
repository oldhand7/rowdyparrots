import styles from '../styles/Parrots.module.css';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Parrots = () => {

  const size = useWindowSize();
  const imgs= ["/img/parrotParrots.png"]

  return (
    <section className={styles.parrotsSection} id="about">
      <img src="/img/leaf1.png" className={styles.leaf1} />
      <img src="/img/leaf2.png" className={styles.leaf2} />
      <div className={styles.contentWrapper}>
        <h3 className={styles.miniTitle} data-aos="fade-right">About</h3>
        <h2 className={styles.title} data-aos="flip-down">Parrots are a<p className={styles.titleAlt}>beautiful </p><p style={{color: 'transparent', display: 'inline'}}>s</p> species</h2>
        <p className={styles.text} data-aos="fade-up">Parrots are highly intelligent animals and can imitate human sounds, even imitating words and phrases, a fact that has made them much loved pets. They vocalize to communicate, mark a territory and identify themselves. They are considered scandalous birds, as they like to make rowdy continuously.</p>
      </div>
      <div className={styles.parrot}>
     {/* <img  src="/img/parrotParrots.png" /> */}
     <Carousel
     className={styles.parrot}
     showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      swipeScrollTolerance={40}
      showIndicators={false}
      showStatus={false}
      emulateTouch={true}
      swipeable={true}
      autoPlay={true}
      interval={3000}
     >
                <div >
                    <img src="/img/parrotParrots.png" />
                </div>
                <div >
                    <img src="/img/parrotParrots.png" />
                </div>
                <div >
                    <img src="/img/parrotParrots.png" />
                </div>
                
            </Carousel>
      </div>
      {size.width < 1200 ? (
        <div className={styles.floatMobile} data-aos="zoom-in">
          <p className={styles.floatTitle}>Rowdy Parrots</p>
          <p className={styles.floatTitle}>Living on <p className={styles.floatTitleAlt}>Ethereum</p></p>
        </div>
      ) : (
        <div className={styles.float} data-aos="zoom-in">
          <p className={styles.floatTitle}>Rowdy Parrots</p>
          <p className={styles.floatTitle}>Living on <p className={styles.floatTitleAlt}>Ethereum</p></p>
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

export default Parrots;
