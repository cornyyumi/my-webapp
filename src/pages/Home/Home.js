import React, { useEffect, useState } from 'react';
import Favicon from "react-favicon";

import "./Home.css";

import myRoom from '../../images/myRoom.png';
import profile from '../../images/profile.png';
import circle1 from '../../images/circle1.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import faviconCorn from '../../images/faviconCorn.png';


function Home() {
    const [tabState, setTabState] = useState(1);

    const toggleTab = (tab) => {
        setTabState(tab);
    }

    useEffect(() => {
        document.title = 'Grace Kim';
    }, []);
    return (

        <div className="main">
            <section className="top"></section>
            <section className="mid">
                <div className="skills">
                    <div className="tabList">
                        <button className={tabState == 1 ? "tab activeTab" : "tab"} onClick={() => toggleTab(1)}>Backend.html</button>
                        <button className={tabState == 2 ? "tab activeTab" : "tab"} onClick={() => toggleTab(2)}>Frontend.html</button>
                    </div>

                    <div className="skillBox">
                        <div className={tabState == 1 ? "skillContent activeContent" : "skillContent"}>
                            <p><span className="skillsH3">&lt;h3&gt;</span> Programming languages and technologies <span className="skillsH3">&lt;h3&gt;</span></p>
                            <p><span className="skillsP">&lt;p&gt;</span> C#, ASP.NET, LINQ, EF Core, Azure
                                Python, Django
                                Java, Hibernate
                                <span className="skillsP"> &lt;/p&gt;</span>
                            </p>

                            <p><span className="skillsH3">&lt;h3&gt;</span> Database <span className="skillsH3">&lt;h3&gt;</span></p>
                            <p><span className="skillsP">&lt;p&gt;</span> SQL, SQLite <span className="skillsP"> &lt;/p&gt;</span></p>

                            <p><span className="skillsH3">&lt;h3&gt;</span> Version Control <span className="skillsH3">&lt;h3&gt;</span></p>
                            <p><span className="skillsP">&lt;p&gt;</span> Git, Github <span className="skillsP"> &lt;/p&gt;</span></p>
                        </div>
                        <div className={tabState == 2 ? "skillContent activeContent" : "skillContent"}>
                            <p><span className="skillsH3">&lt;h3&gt;</span> Languages and technologies <span className="skillsH3">&lt;h3&gt;</span></p>
                            <p><span className="skillsP">&lt;p&gt;</span> HTML, CSS, React, Javascript, Typescript, Npm <span className="skillsP"> &lt;/p&gt;</span></p>

                            <p><span className="skillsH3">&lt;h3&gt;</span> Version Control <span className="skillsH3">&lt;h3&gt;</span></p>
                            <p><span className="skillsP">&lt;p&gt;</span> Git, Github <span className="skillsP"> &lt;/p&gt;</span></p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="bot"></section>

        </div>


        /* <div className={styles.main}>
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
                            <p>It will take a few seconds to render the page (Works best on any browser other than chrome).</p>
                            <p></p>
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
        */
    );
}

export default Home