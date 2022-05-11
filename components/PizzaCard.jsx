import styles from "../styles/PizzaCard.module.css";
import Image from "next/image"

const PizzaCard = ()=>{
    return (
        <div className={styles.container}>
            <Image src="/assets/images/pizza.png" alt="Pizza Item" width="500" height="500" />
            <h1 className={styles.title}>Pizza Title</h1>
            <span className={styles.price}>$15</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit vero, libero minus corporis nisi ab odio modi veniam vel delectus, quae totam eum reiciendis dolorum aspernatur inventore fuga quasi. Reprehenderit.
            </p>
        </div>
    )
}

export default PizzaCard;