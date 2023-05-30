import styles from "./styles.module.scss";

export default function Spotlight({ item }: any) {
  return (
    <div className={styles.spotlightContainer}>
      <img src={item.imageUrl} width="100%" style={{ objectFit: "cover" }} />
      <div className={styles.issueContainer}>
        <div className={styles.spotlightAndIssue}>
          <div>Spotlight</div>
          <div>Issue {item.issueNumber}</div>
        </div>
        <h1 className={styles.title}>{item.mainTitle}</h1>
        <div className={styles.description}>
          <h1>{item.mainDescription}</h1>
          <h2>Read More</h2>
        </div>
        <h1 className={styles.author}>
          Words by <span>{item.mainAuthor}</span>
        </h1>
      </div>
    </div>
  );
}
