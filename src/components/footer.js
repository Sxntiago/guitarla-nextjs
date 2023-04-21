import Link from "next/link";
import React from "react";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.nav}>
          <Link href='/'>Home</Link>
          <Link href='/about'> About</Link>
          <Link href='/blog'> Blog</Link>
          <Link href='/guitars'> Guitars</Link>
        </nav>
        <p className={styles.copyright}>{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
