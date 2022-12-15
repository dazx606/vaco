
import dataProvider from "../../Utils/Data/dataProvider";
import styles from "./Home.module.css";

const Home = () => {

    const handleClick = (): void => {
        dataProvider.getData()
            .then(res => {
                console.log(res?.info)
            })
            .catch(err => { console.log(err); alert('error al obtener caracteres') })
    }

    return (
        <div className={styles.home}>
            <button className={styles.button} onClick={handleClick}>
                Hola
            </button>
        </div>
    )
}

export default Home;
