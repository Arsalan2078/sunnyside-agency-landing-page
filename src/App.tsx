import styles from "./App.module.scss";
import ButtonContact from "./components/ButtonContact";
import ButtonDefault from "./components/ButtonDefault";
import Footer from "./components/Footer";
import Icon from "./components/Icon";
import Logo from "./components/Logo";
import SectionAbout from "./components/SectionAbout";
import SectionGallery from "./components/SectionGallery";
import SectionServices from "./components/SectionServices";
import SectionTestimonials from "./components/SectionTestimonials";

export default function App() {
  return (
    <div className={`${styles.app}`}>
      <div className={`${styles.container}`}>
        <header>
          <div>
            <div>
              <div>
                <Logo />
              </div>

              <nav>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <ButtonContact href="#">Contact</ButtonContact>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <h1>We are creatives</h1>

              <Icon icon="arrow-down" />
            </div>
          </div>
        </header>

        <main>
          <SectionAbout />
          <SectionServices />
          <SectionTestimonials />
          <SectionGallery />
        </main>

        <Footer />
      </div>
    </div>
  );
}
