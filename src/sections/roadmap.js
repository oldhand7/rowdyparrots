import styles from '../styles/Roadmap.module.css';
import React from 'react';

const Roadmap = () => {

  const size = useWindowSize();

  return (
    <section className={styles.roadmapSection} id="roadmap">
      <img src="/img/tree.png" className={styles.tree} />
      <h3 className={styles.miniTitle} data-aos="fade-down">Roadmap</h3>
      <h2 className={styles.title} data-aos="flip-up">Get<p className={styles.titleAlt}>awesome</p>discounts</h2>
      <p className={styles.miniTitle} style={{fontSize: '18px'}}>In our zoos you can ride horses, enjoy our animals and shows of different animals</p>
      <p className={styles.miniTitle} style={{fontSize: '22px', marginBottom: '20px'}}>Visit our aquarium with more than 200 aquatic animals</p>
      {size.width > 1000 ? (
        <>
        <div>
        <p style={{color: 'white'}}>in our zoos you can ride horses, enjoy our animals and shows of different animals</p>
        <p >in our zoos you can ride horses, enjoy our animals and shows of different animals</p>
        </div>
      <div className={styles.treeWrapper}>
     
        <div className={styles.treeLeftWrapper}>
          <div className={styles.treeContent} data-aos="fade-right">
            <h4 className={styles.treeTitle}><p className={styles.treeTitleAlt}>PRE</p>SALE</h4>
            <p className={styles.text}>Only 999 parrot's will be listed for the whitelist</p>
          </div>
          <div className={styles.treeContent} data-aos="fade-right">
            <h4 className={styles.treeTitle}><p className={styles.treeTitleAlt}>25%</p> - 2.500 parrots</h4>
            <p className={styles.text}>We will give away shirts, hats and sweatshirts with the logo of our collection among the holders </p>
          </div>
          <div className={styles.treeContent} data-aos="fade-right">
            <h4 className={styles.treeTitle}><p className={styles.treeTitleAlt}>75%</p> - 7.500 parrots</h4>
            <p className={styles.text}>we will create a zoo within the decentraland metaverse with P2E technology and a new MZ (Meta Zoo) token</p>
          </div>
        </div>
        <div className={styles.treeRightWrapper}>
          <div className={styles.treeContent} data-aos="fade-left">
            <h4 className={styles.treeTitle}><p className={styles.treeTitleAlt}>10%</p> - 1.000 parrots</h4>
            <p className={styles.text}>We will begin with the creation of the Rowdy Parrot's Foundation within the decentraland metaverse</p>
          </div>
          <div className={styles.treeContent} data-aos="fade-left">
            <h4 className={styles.treeTitle}><p className={styles.treeTitleAlt}>50%</p> - 5.000 parrots</h4>
            <p className={styles.text}>We will select the location of our collection within the metaverse</p>
          </div>
          <div className={styles.treeContent} data-aos="fade-left">
            <h4 className={styles.treeTitle}><p className={styles.treeTitleAlt}>100%</p> - 10.000  parrots</h4>
            <p className={styles.text}>We will give away tokens of our project to HOLD or visit our zoo’s among the holders of the NFT</p>
          </div>
        </div>
      </div>
      </>
      ) : (
        <div className={styles.treeWrapperMobile}>
          
          <div className={styles.mobileRoadmapGoals}>
            <h4 className={styles.treeTitle}><p className={styles.treeTitleAlt}>PRE</p>SALE</h4>
            <p className={styles.text}>Only 999 parrot's will be listed for the whitelist</p>
          
            <h4 className={styles.treeTitle}><p className={styles.treeTitleAlt}>10%</p> - 1.000 parrots</h4>
            <p className={styles.text}>We will begin with the creation of the Rowdy Parrot's Foundation within the decentraland metaverse</p>

            <h4 className={styles.treeTitle}><p className={styles.treeTitleAlt}>25%</p> - 2.500 parrots</h4>
            <p className={styles.text}>We will give away shirts, hats and sweatshirts with the logo of our collection among the holders </p>
          
            <h4 className={styles.treeTitle}><p className={styles.treeTitleAlt}>50%</p> - 5.000 parrots</h4>
            <p className={styles.text}>We will select the location of our collection within the metaverse</p>
          
            <h4 className={styles.treeTitle}><p className={styles.treeTitleAlt}>75%</p> - 7.500 parrots</h4>
            <p className={styles.text}>we will create a zoo within the decentraland metaverse with P2E technology and a new MZ (Meta Zoo) token</p>
          
            <h4 className={styles.treeTitle}><p className={styles.treeTitleAlt}>100%</p> - 10.000 parrots</h4>
            <p className={styles.text}>We will give away tokens of our project to HOLD or visit our zoo’s among the holders of the NFT</p>
          </div>
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

export default Roadmap;
