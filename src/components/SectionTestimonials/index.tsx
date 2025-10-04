import styles from "./index.module.scss";
import TestimonialCard from "../TestimonialCard";

export default function SectionTestimonials() {
  return (
    <section className={`${styles.section}`}>
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
  );
}
