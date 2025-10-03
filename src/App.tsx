import styles from "./App.module.scss";
import ButtonContact from "./components/ButtonContact";
import ButtonDefault from "./components/ButtonDefault";
import Footer from "./components/Footer";
import Icon from "./components/Icon";
import Logo from "./components/Logo";
import Picture from "./components/Picture";
import TestimonialCard from "./components/TestimonialCard";

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
              extend your brand in digital places.{" "}
            </p>

            <ButtonDefault href="#" variation="2">
              Learn More
            </ButtonDefault>
          </section>

          <section>
            <h3>Graphic design</h3>
            <p></p>Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
            <h3></h3>Photography
            <p></p>Increase your credibility by getting the most stunning,
            high-quality photos that improve your business image.
          </section>

          <section>
            <h4>Client testimonials</h4>

            <ul>
              <li>
                <TestimonialCard
                  image="/images/image-emily.jpg"
                  paragraph="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                  customer={{
                    name: "Emily R.",
                    occupation: "Marketing Director",
                  }}
                />
              </li>
              <li>
                <TestimonialCard
                  image="/images/image-thomas.jpg"
                  paragraph="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
                  customer={{
                    name: "Thomas S.",
                    occupation: "Chief Operating Officer",
                  }}
                />
              </li>
              <li>
                <TestimonialCard
                  image="/images/image-jennie.jpg"
                  paragraph="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                  customer={{ name: "Jennie F.", occupation: "Business Owner" }}
                />
              </li>
            </ul>
          </section>

          <section>
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
        </main>

        <Footer />
      </div>
    </div>
  );
}
