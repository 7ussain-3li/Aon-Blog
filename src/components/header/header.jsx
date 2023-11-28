import Link from "next/link";
import { Container } from "../container/container";
import styles from "./header.module.css";

export const Header = ({page="HOME"}) => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <h1><span>Aon</span> Blog</h1>
                    <ul>
                        <li className={page ==="HOME" ? styles.active : ""}><Link href="/">Home</Link></li>
                        <li className={page ==="ABOUT" ? styles.active : ""}><Link href="/about">About</Link></li>
                        <li className={page ==="HELP" ? styles.active : ""}><Link href="/help">Help</Link></li>
                    </ul>
                </div>
            </Container>
        </header>
    )
}
