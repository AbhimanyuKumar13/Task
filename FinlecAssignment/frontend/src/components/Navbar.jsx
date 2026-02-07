import { Link } from "react-router-dom";
import { isAuthenticated, getUser, logout } from "../utils/auth";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const user = getUser();

  return (
    <nav className={styles.navbar}>
      <h3 className={styles.logo}>TaskManager</h3>

      <div className={styles.actions}>
        {!isAuthenticated() ? (
          <>
            <Link to="/login" className={`${styles.btn} ${styles.secondary}`}>
              Login
            </Link>
            <Link to="/register" className={`${styles.btn} ${styles.primary}`}>
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <span className={styles.username}>Hi, {user?.name}</span>
            <button
              className={`${styles.btn} ${styles.danger}`}
              onClick={logout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
