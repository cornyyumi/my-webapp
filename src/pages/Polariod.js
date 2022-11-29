import styles from '../style/Polariod.module.css';
import corn from '../images/corn.png';
import cornCat from '../images/cornCat.png';
import corny from '../images/corny.png';

function Polariod(){
    return (
        <div className={styles.main}>
            <div className={styles.cardGroup}>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <a href="https://www.instagram.com/hybreasalis/" target="_blank">
                            <img src={corny} onc/>
                        </a>
                    </div>
                    <div className={styles.cardText}>
                        <p>Thank you <a href="https://www.instagram.com/hybreasalis/" target="_blank">@hybreasalis</a> for the corny profile picture</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src={corn}/>
                    </div>
                    <div className={styles.cardText}>
                        <p>Self-made Corn</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                            <img src={cornCat}/>
                    </div>
                    <div className={styles.cardText}>
                            <p>Corny cat</p>
                    </div>
                 </div>
            </div>
        </div>
        
    )
}

export default Polariod