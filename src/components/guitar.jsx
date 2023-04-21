import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitars.module.css";

export const Guitar = ({ guitar }) => {
  const { description, image, name, price, url } = guitar;
  return (
    <div className={styles.guitar}>
      <Image
        width={600}
        height={400}
        src={image.data.attributes.formats.medium.url}
        alt={`Image from api with the name of ${name}`}
      />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link className={styles.link} href={`/guitars/${url}`}>
          Show Product
        </Link>
      </div>
    </div>
  );
};
