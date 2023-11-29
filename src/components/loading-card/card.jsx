import styles from './card.module.css';
import { Space } from '../space/space';

export const LoadingCard = () => {
    return (
        <div className={styles.loadingCard}>
            <div className={`${styles.loadingImg} ${styles.Skeleton}`}></div>
            <Space height={12} />
            <div className={`${styles.loadingTitle} ${styles.Skeleton}`}></div>
            <div className={`${styles.subTitle} ${styles.Skeleton}`}></div>
            <Space height={12} />
            <div className={`${styles.loadingText} ${styles.Skeleton}`}></div>
        </div>
    )
}