import React from "react";
import styles from "./styles.module.scss";

export default function News({ news }: any) {
  return (
    <div className={styles.newsContainer}>
      <div>
        <h1 className={styles.newsTitle}>{news.title}</h1>
        <h1 className={styles.newsAuthorContainer}>
          Words By <span className={styles.newsAuthor}>{news.author}</span>
        </h1>
      </div>
      <h1 className={styles.newsMainDesc}>{news.newsMainDescription}</h1>
      <h1 className={styles.readMore}>Read More</h1>
      {/* <h1 className={styles.newsCategory}>{news.category}</h1> */}
    </div>
  );
}
