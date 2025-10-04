import styles from "./index.module.scss";
import Picture from "../Picture";

export default function SectionGallery() {
  return (
    <section className={`${styles.section}`}>
      <ul>
        <li>
          <Picture picture="gallery-milkbottles" />
        </li>
        <li>
          <Picture picture="gallery-orange" />
        </li>
        <li>
          <Picture picture="gallery-cone" />
        </li>
        <li>
          <Picture picture="gallery-sugarcubes" />
        </li>
      </ul>
    </section>
  );
}
