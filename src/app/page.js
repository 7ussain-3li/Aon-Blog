"use client"

import { Container } from '@/components/container/container'
import styles from './page.module.css'
import { Header } from "@/components/header/header"
import { Space } from '@/components/space/space'
import { ArticleCard } from '@/components/article-card/article'
import { useEffect, useState } from 'react'
import { Cover } from '@/components/cover/cover'
import { Loading } from '@/components/loading/loading'

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [skip, setSkip] = useState(0);


  const getArticles = async () => {
    try {
      let response = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?limit=12&offset=${skip}`);
      let data = await response.json();
      setArticles([...articles, ...data.blogs]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, [skip]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setSkip(skip + 12);
  };

  return (
    <main className={styles.main}>
      <Header />
      <Cover />
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.articleList}>
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        )}
        <Space height={150} />
        {loadingMore && <Loading />}
          <button className={styles.loadMore} onClick={handleLoadMore} disabled={loadingMore}>
            {loadingMore ? "Loading..." : "Load More"}
          </button>
      </Container>
      <Space height={150} />
    </main>
  )
}
