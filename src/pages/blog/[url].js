import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../../styles/blog.module.css";
import { updateDate } from "../../../utils/helpers";

function Post({ post }) {
  const { title, content, image, publishedAt } = post[0].attributes;
  return (
    <Layout title={`GuitarLa - ${title}`}>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          width={1000}
          height={600}
          alt={`image taken from api ${title}`}
          src={image.data.attributes.url}
        />
        <div className={styles.content}>
          <h3>{title}</h3>
          <p className={styles.date}>{updateDate(publishedAt)}</p>
          <p className={styles.text}>{content}</p>
        </div>
      </article>
    </Layout>
  );
}

export default Post;

export async function getServerSideProps({ query: { url } }) {
  const res = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
  );
  const { data: post } = await res.json();

  return {
    props: {
      post,
    },
  };
}
