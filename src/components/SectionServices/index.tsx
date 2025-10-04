import styles from "./index.module.scss";
import Picture from "../Picture";

export default function SectionServices() {
  return (
    <section className={styles.section}>
      <div className={`${styles.service} ${styles.graphic}`}>
        <Picture picture="graphic-design" />

        <div className={styles.desc}>
          <h3>Graphic design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>

      <div className={`${styles.service} ${styles.photography}`}>
        <Picture picture="photography" />

        <div className={styles.desc}>
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
}
