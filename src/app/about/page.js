import { Header } from "@/components/header/header";
import styles from "./page.module.css";
import { Container } from "@/components/container/container";
import Image from "next/image";
import { Space } from "@/components/space/space";

export default function About() {
    return (
        <main className={styles.main}>
            <Header page="ABOUT" />
            <Space height={80} />
            <Container>
                <div className={styles.content}>
                    <div className={styles.cover}>
                        <Image className={styles.img} src="/Cover.jpg" alt="failed to load" fill />
                    </div>
                    {/* this div is for the small screen size  */}
                    <div className={styles.content2}>
                        <div className={styles.overlay2}>
                            <div className={styles.cover2}>
                                <Image className={styles.img} src="/AonLogo.jpg" alt="failed to load" fill />
                            </div>
                            <h2>ABOUT US</h2>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.overlay}>
                            <h2>ABOUT US</h2>
                        </div>
                        <div className={styles.text}>
                            <p>
                                <span>Aon</span> is a program that includes
                                many courses to assist people in achieving their goals.
                                These courses prepare people to the market with the right skills.
                            </p>
                            <Space height={20} />
                            <p>
                                The Founder of Aon is Mrs. <b>Nabaa Naith</b> a techpreneur and software engineer.
                            </p>
                            <Space height={20} />
                            <p>
                                Aon starts in October 2023, with their first course <b>Full Stack Web Development</b> this course is completely free.
                                <br />
                                the trianer of this course is Mr. <b>Murtadha M. Abed</b> a full stack web developer.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Space height={150} />
        </main>
    )
}