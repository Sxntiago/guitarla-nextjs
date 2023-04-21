import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href={"/"}>
          <Image
            src='/img/icon.svg'
            width={300}
            height={40}
            alt='guitar logo'
          />
        </Link>

        <nav className={styles.nav}>
          <Link
            className={router.pathname === "/" ? styles.active : ""}
            href='/'
          >
            Home
          </Link>
          <Link
            className={router.pathname === "/about" ? styles.active : ""}
            href='/about'
          >
            {" "}
            About
          </Link>
          <Link
            className={router.pathname === "/blog" ? styles.active : ""}
            href='/blog'
          >
            {" "}
            Blog
          </Link>
          <Link
            className={router.pathname === "/guitars" ? styles.active : ""}
            href='/guitars'
          >
            {" "}
            Guitars
          </Link>
          <Link href='/cart'>
            <Image
              width={30}
              height={25}
              src='/img/cart.png'
              alt='image of a shopping cart'
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
