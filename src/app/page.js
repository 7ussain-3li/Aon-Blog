"use client"

import { Container } from '@/components/container/container'
import styles from './page.module.css'
import { Header } from "@/components/header/header"
import { Space } from '@/components/space/space'
import { ArticleCard } from '@/components/article-card/article'
import { useEffect, useState } from 'react'
import { Cover } from '@/components/cover/cover'

export default function Home() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      let response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts');
      let data = await response.json();
      setArticles(data.blogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <Cover />
      <Container>
        <div className={styles.articleList}>
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </Container>
      <Space height={150} />
    </main>
  )
}
