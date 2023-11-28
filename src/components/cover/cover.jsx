import styles from './cover.module.css';
import { Container } from '../container/container';

export const Cover = () => {
    return (
        <div className={styles.cover}>
            <div className={styles.overlay}>
                <Container>
                    <h1>Simple Blog.</h1>
                    <p>A blog created by <span>Aon</span> 2023</p>
                </Container>
            </div>
        </div>
    )
}