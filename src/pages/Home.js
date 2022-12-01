import React, { useEffect } from 'react';
import Favicon from "react-favicon";

import styles from '../style/Home.module.css';
import myRoom from '../images/myRoom.png';
import profile from '../images/profile.png';
import circle1 from '../images/circle1.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import faviconCorn from '../images/faviconCorn.png';

function Home() {
    useEffect(() => {
        document.title = 'Grace Kim';
      }, []);
    return (
        <div className={styles.main}>
            <Favicon url={faviconCorn}></Favicon>
            <div className={styles.left}>
                <div className={styles.leftTop}>
                    <h1>Hi, I'm Grace Kim</h1>
                    <img src={profile}/>
                </div>
                <div className={styles.leftBot}>
                        <div className={styles.leftText}>
                            <p>
                                I am currently in my last year of my bachelor’s degree in Computer Science at the University of Auckland.
                            </p> <br/>
                        </div>
                        <div className={styles.leftText}>
                            <p>I love to draw, code and create new things in my spare time.</p> <br/>
                        </div>
                        <div className={styles.leftText}>
                            <p>I've been recently learning how to 3D model using Spline, and I would love to show my mini project to you!</p>
                            <p>It will take a few seconds to render the page.</p>
                    </div>
                    <h2>Check out my other links:</h2>
                    <div className={styles.linksList}>
                        <a href='https://github.com/cornyyumi' target='_blank'>
                            <div className={styles.link}>
                                <img src={github}/>
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/grace-kim-62140821b/' target='_blank'>
                            <div className={styles.link}>
                                <img src={linkedin}/>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
            <div className={styles.right}>

                <div className={styles.circle1}>
                    <img src={circle1}/>
                </div>
                <div className={styles.myRoom}>
                        <img src={myRoom}/>
                </div>
                <div className={styles.myRoomButton} onClick="">
                    <a href='https://my.spline.design/miniroomcopy-2b0371a4479332490331fcef92a208a3/' target="_blank" >
                        <p>Click here to interact with my room!</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home