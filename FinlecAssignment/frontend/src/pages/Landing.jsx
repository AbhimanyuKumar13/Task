import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <section className={styles.landing}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Organize work. Focus on what matters.
        </h1>

        <p className={styles.subheading}>
          A simple task management platform to plan, track, and complete your
          work without distractions.
        </p>

        <Link to="/register" className={styles.cta}>
          Get Started
        </Link>
      </div>
    </section>
  );
}
