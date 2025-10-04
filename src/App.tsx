import styles from "./App.module.scss";
import ButtonContact from "./components/ButtonContact";
import ButtonDefault from "./components/ButtonDefault";
import Footer from "./components/Footer";
import Icon from "./components/Icon";
import Logo from "./components/Logo";
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
          <section>
            <h2>Transform your brand</h2>

            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>

            <ButtonDefault href="#" variation="1">
              Learn More
            </ButtonDefault>

            <h2>Stand out to the right audience</h2>

            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>

            <ButtonDefault href="#" variation="2">
              Learn More
            </ButtonDefault>
          </section>


          <SectionServices />
          <SectionTestimonials />
          <SectionGallery />
        </main>

        <Footer />
      </div>
    </div>
  );
}
