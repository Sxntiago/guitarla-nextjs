import Image from "next/image";
import Link from "next/link";
import { updateDate } from "../../utils/helpers";
import React from "react";
import styles from "../styles/blog.module.css";

const Post = ({ post }) => {
  const { content, image, title, url, publishedAt } = post;
  return (
    <article>
      <Image
        width={600}
        height={400}
        alt={`image taken from api ${title}`}
        src={image.data.attributes.formats.medium.url}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{updateDate(publishedAt)}</p>
        <p className={styles.summary}>{content}</p>
        <Link className={styles.link} href={`/blog/${url}`}>
          Read Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
