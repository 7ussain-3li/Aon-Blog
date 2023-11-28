import { Header } from "@/components/header/header";
import styles from "./page.module.css";
import { Container } from "@/components/container/container";
import Image from "next/image";
import { Space } from "@/components/space/space";
export default function Help() {
    return (
        <main className={styles.main}>
            <Header page="HELP" />
            <Space height={80} />
            <Container>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h2>Support and Help</h2>
                        <Space height={32} />
                        <p>Hi, Need Help?
                            <br/>
                            Never hesitate to contact us. We are here to help you.
                        </p>
                        <Space height={32} />
                        <a href="https://instagram.com/aon.iq?igshid=OGQ5ZDc2ODk2ZA=="><button>Contact Us</button></a>
                    </div>
                    <div className={styles.avatar}><Image className={styles.img} src="/support.svg" alt="failed to load" fill /></div>
                </div>
            </Container>
            <Space height={150} />
        </main>
    )
}