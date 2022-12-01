import React, { useEffect } from 'react';
import Favicon from "react-favicon";

import styles from '../style/Polariod.module.css';
import polariod1 from '../images/polariod1.PNG';
import polariod2 from '../images/polariod2.JPG';
import polariod3 from '../images/polariod3.JPG';
import faviconCamera from '../images/faviconCamera.png';

function Polariod(){
    useEffect(() => {
        document.title = 'Memories';
      }, []);
    return (
        <div className={styles.main}>
            <Favicon url={faviconCamera}></Favicon>
            <div className={styles.cardGroup}>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src={polariod3} onc/>
                    </div>
                    <div className={styles.cardText}>
                        <p>My family ❤️</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src={polariod1}/>
                    </div>
                    <div className={styles.cardText}>
                        <div className={styles.description}>
                            <p>My recent birthday</p>
                        </div>
                        <div className={styles.date}>
                            <p>23/11/2022</p>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                            <img src={polariod2}/>
                    </div>
                    <div className={styles.cardText}>
                            <p>Family fishing trip @Tāwharanui</p>
                    </div>
                 </div>
            </div>
        </div>
        
    )
}

export default Polariod