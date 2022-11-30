import styles from '../style/Home.module.css';
import myRoom from '../images/myRoom.png';
import profile from '../images/profile.png';
import circle1 from '../images/circle1.png';

function Home() {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.leftTop}>
                    <h1>Hi, I'm Grace Kim</h1>
                    <img src={profile}></img>
                </div>
                <div className={styles.leftBot}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc a felis consequat, molestie enim et, viverra libero.
                        Integer tempus diam at justo tempus, at iaculis mi fringilla.
                    </p>
                    <h2>Check out my other links!</h2>
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