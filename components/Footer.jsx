import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = ()=>{
    return (
        <footer className={styles.container}>
            <div className={styles.item}>
                <Image src="/assets/images/bg.png" layout="fill" alt="Footer BG Image" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES- We did Pizza Delicius!
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Find our Restaurant</h1>
                    <adddress className={styles.text}>
                        124 Road, 6th Floor <br />
                        Dhaka, BD <br />
                        +880 1933388899
                    </adddress>
                    <adddress className={styles.text}>
                        124 Road, 6th Floor <br />
                        Dhaka, BD <br />
                        +880 1933388899
                    </adddress>
                    <adddress className={styles.text}>
                        124 Road, 6th Floor <br />
                        Dhaka, BD <br />
                        +880 1933388899
                    </adddress>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        124 Road, 6th Floor <br />
                        Dhaka, BD <br />
                        +880 1933388899
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;