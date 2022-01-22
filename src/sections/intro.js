import styles from '../styles/Intro.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Intro() {

  
  
let carousell=[];
for(var i=1;i<=10;i++){
  carousell.push(`/img/carousel/${i}.png`)
}
//const carouselItems= [1,2,3,4,5,6,7,8,9]
const test=['/img/carousel/1.png', '/img/carousel/2.png', '/img/carousel/3.png', '/img/carousel/4.png', '/img/carousel/5.png', '/img/carousel/6.png', '/img/carousel/7.png', '/img/carousel/8.png']

  return (
    <section className={styles.introSection} id="home">
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer} data-aos="flip-up">
          <h1 className={styles.title}>Rowdy</h1>
          <h1 className={styles.titleAlt}>Parrots</h1>
        </div>
        <p className={styles.description} data-aos="fade-right">Rowdy parrots is a collection of 10,000 unique and algorithmically generated 3D parrots living on the ethereum blockchain</p>
        <p className={styles.info} data-aos="fade-left">Learn more about this animals and start collecting</p>
        {/* <button className={styles.button} data-aos="fade-up">Connect Wallet</button> */}
      </div>
      {/* <img className={styles.parrot} src={'/img/parrotIntro.png'} /> */}
       <Carousel
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
      className={styles.parrot}>
                
          {test.map((item)=>{
            return (  
              <div style={{marginRight: '20px', borderRadius: '15px'}}>
          <img style={{ borderRadius: '15px'}} src={item}/>
          </div>
            )
        })}
                    
                
                
            </Carousel>  
    
           
    </section>
  )
}
