import styles from "./index.module.scss";

type TestimonialCardProps = {
  image: string;
  paragraph: string;
  customer: {
    name: string;
    occupation: string;
  };
};

export default function TestimonialCard({
  image,
  paragraph,
  customer,
}: TestimonialCardProps) {
  return (
    <div className={`${styles.card}`}>
      <div>
        <img src={image} alt={customer.name} className={`${styles.image}`} />
        <p>{paragraph}</p>
      </div>

      <div>
        <div className={`${styles.name}`}>{customer.name}</div>
        <div className={`${styles.occupation}`}>{customer.occupation}</div>
      </div>
    </div>
  );
}
