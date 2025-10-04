import styles from "./index.module.scss";
import ButtonDefault from "../ButtonDefault";
import Picture from "../Picture";

export default function SectionAbout() {
  return (
    <section className={`${styles.section}`}>
      <section className={`${styles.subsection} ${styles.transform}`}>
        <Picture picture="transform" />

        <div className={`${styles.content}`}>
          <h2>Transform your brand</h2>

          <div className={`${styles.info}`}>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>

            <ButtonDefault href="#" variation="1">
              Learn More
            </ButtonDefault>
          </div>
        </div>
      </section>

      <section className={`${styles.subsection} ${styles.standout}`}>
        <Picture picture="stand-out" />

        <div className={`${styles.content}`}>
          <h2>Stand out to the right audience</h2>

          <div className={`${styles.info}`}>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <ButtonDefault href="#" variation="2">
              Learn More
            </ButtonDefault>
          </div>
        </div>
      </section>
    </section>
  );
}
