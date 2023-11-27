import { Container } from "../container/container";
import styles from "./header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <h1>Aon Blog</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Help</li>
                    </ul>
                </div>
            </Container>
        </header>
    )
}
