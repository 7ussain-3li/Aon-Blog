import { Header } from "@/components/header/header"
import styles from "./page.module.css"
import { Container } from "@/components/container/container"
import { Space } from "@/components/space/space"
import dayjs from "dayjs";
import Image from "next/image";

const Article = async ({ params }) => {
    try {
        const data = await getBlog(params.id);
        return (
            <main className={styles.main}>
                <Header />
                <Space height={100} />
                <Container>
                    <div className={styles.heading}>
                        <div>
                            <h1>{data.blog.title}</h1>
                            <p>{data.blog.description}</p>
                        </div>
                        <p>{dayjs(data.blog.created_at).format("YYYY/MM/DD")}</p>
                    </div>
                    <Space height={25} />
                    <div className={styles.cover}><Image className={styles.img} src={data.blog.photo_url} alt={"failed to load"} fill /></div>
                    <Space height={50} />
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.blog.content_html }}></div>
                </Container>
                <Space height={150} />
            </main>
        )
    } catch (error) {
        console.log(error)
    }
}

export default Article;

async function getBlog(id) {
    const response = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const blog = await response.json();
    return blog
}
