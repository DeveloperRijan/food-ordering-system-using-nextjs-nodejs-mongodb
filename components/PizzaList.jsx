import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard";

const PizzaList = ()=>{
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The best Pizza's in Town</h1>
            <p className={styles.des}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestias iusto aperiam adipisci eum id vitae minus tempore. Ut iusto ea tempora accusamus mollitia minima numquam quasi obcaecati esse quibusdam!
            </p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
}

export default PizzaList;