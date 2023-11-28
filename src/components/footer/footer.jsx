import styles from "./footer.module.css";
import { Container } from "../container/container";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Space } from "../space/space";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <p>&copy; <span>Aon</span> 2023. All rights reserved.</p>
                    <div className={styles.media}>
                        <a href="https://instagram.com/aon.iq?igshid=OGQ5ZDc2ODk2ZA==">
                            <FaInstagramSquare />
                        </a>
                        <Space width={12} />
                        <a href="https://www.facebook.com/profile.php?id=61551642341887&mibextid=LQQJ4d">
                            <FaFacebookSquare />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}