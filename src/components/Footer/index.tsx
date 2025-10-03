import styles from "./index.module.scss";
import Logo from "../Logo";
import Icon from "../Icon";

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.top}`}>
          <div className={`${styles.logo}`}>
            <Logo />
          </div>

          <ul className={`${styles.links}`}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>

        <ul className={`${styles.socmeds}`}>
          <li>
            <a href="#">
              <Icon icon="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon="instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon="pinterest" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
