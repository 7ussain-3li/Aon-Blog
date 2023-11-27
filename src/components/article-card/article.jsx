import Link from "next/link";
import { Space } from "../space/space";
import styles from "./article.module.css";
import dayjs from "dayjs";
import Image from "next/image";

export const ArticleCard = ({ article }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}><Image className={styles.img} src={article.photo_url} alt={"failed to load"} fill /></div>
            <Space height={12} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <Space height={12} />
            <div className={styles.action}>
                <Link className={styles.link} href={`/article/${article.id}`}>Read Article</Link>
                <span>{dayjs(article.created_at).format("YYYY MMMM DD")}</span>
            </div>
        </div>
    )
}