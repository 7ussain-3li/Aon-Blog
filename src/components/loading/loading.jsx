import { LoadingCard } from "../loading-card/card";
import styles from "./loading.module.css";

export const Loading = () => {
    let arr = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    return (
        <main className={styles.main}>
            <div className={styles.loadingList}>
                {arr.map(() => (
                    <LoadingCard />
                ))}
            </div>
        </main>
    )
}