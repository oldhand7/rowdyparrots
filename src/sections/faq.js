import styles from '../styles/Faq.module.css';
import { useState } from 'react';

const Faq = () => {

  const accordionItems = [
    {"question": "Where can I buy them?", "answer": "Parrots can be bought on this webpage's top section."},
    {"question": "Will there be a secondary market?", "answer": "Yes,we’ll be on Ethereum's blockchain, on open sea webpage so parrots can be commercialised fast and efficiently."},
    {"question": "How much do they cost?", "answer": "Minting cost is 0.08 + gas fee.", "subAnswer": "Presale cost is 0.05 + gas fee."},
    {"question": "How many parrots are there?", "answer": "10.000 parrots."},
    {"question": "How can I trade my parrots?", "answer": "You can do it on Open sea."},
    {"question": "What is DAO?", "answer": "DAO is a decentralized autonomous body, it refers to a revolutionary way of organizing and operating organizations, making use of smart contracts and blockchain technology to provide transparency, immutability, autonomy and security to them, it is an idea for a company that it is managed with applied digital rules and without hierarchical management. DAO as an idea is very close to Bitcoin in its attempt to get rid of all middlemen in transactions."},
    {"question": "What is the metaverse?", "answer": "The metaverse is a world parallel to the real one, inside which people can interact with each other and with the environment, such as moving objects, moving around and at the same time, from which it is possible to interact with the real world, shopping, working, and controlling devices."},
    {"question": "What is MZ token?", "answer": "The meta zoo token It’s the way to pay the entrance to our park and its different attractions."},
    {'question': 'What is P2E?', 'answer' : 'It is a video game that playing it you earn money (play to earn), where some of its parts are an NFT.  Usually the characters are, but so can the weapons, terrain, objects, vehicles, etc.  That is, you buy that NFT with money, and it is unique within the game.'}
  ]

  const [accordionStatus, setAccordionStatus] = useState(undefined);

  return (
    <section className={styles.faqSection} id="faq">
      <h3 className={styles.miniTitle} style={{marginTop: '55px'}} data-aos="fade-down">FAQ</h3>
      <h2  style={{marginTop: '25px'}} className={styles.title} data-aos="flip-up">Any<p className={styles.titleAlt}>Question?</p></h2>
      {accordionItems.map((item, index)=>{
        return (
          <>
            {accordionStatus === index ? (
              <>
                <div key={index} className={styles.accordion} onClick={() => {setAccordionStatus(index)}}>
                  <p className={styles.accordionTitleAlt}>{item.question}</p>
                  <img className={styles.accordionIconAlt} src="/img/arrowUp.png"/>
                </div>
                <p className={styles.accordionAnswer}>{item.answer}</p>
                {item.subAnswer && <p className={styles.accordionAnswer}>{item.subAnswer}</p>}
              </>
            ) : (
              <div key={index} className={styles.accordion} onClick={() => {setAccordionStatus(index)}} data-aos="zoom-in">
                <p className={styles.accordionTitle}>{item.question}</p>
                <img className={styles.accordionIcon} src="/img/arrowDown.png"/>
              </div>
            )}
          </>
        )
      })}
    </section>
  )
}

export default Faq
