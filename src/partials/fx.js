import React from 'react';
import styles from '../styles/Fx.module.css';

const Fx = () => {

  const leafs = [
  [ 37, 6 ],  [ 15, 18 ],  [ 46, 18 ], [ 57, 87 ], [ 39, 27 ],
  [ 20, 48 ], [ 31, 72 ],  [ 83, 50 ], [ 15, 85 ], [ 92, 11 ],
];

  return (
    <>
      {leafs.map((item, index)=>{
          return <img key={index} className={styles.leaf} src="/img/leafSmall.png" style={{animationDuration: leafs[index][0]/8+1 + 's', left: leafs[index][1] + 'vw', transform: `rotate(${index*10}deg)`}}/>;
      })}
    </>
  )
}

export default Fx;