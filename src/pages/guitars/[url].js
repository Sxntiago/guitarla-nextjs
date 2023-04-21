import Image from "next/image";
import { useState } from "react";
import React from "react";
import styles from "../../styles/guitars.module.css";
import Layout from "@/components/layout";

export default function Item({ guitars, addGuitar }) {
  const [qty, setQty] = useState(0);
  const { name, description, price, image } = guitars[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (qty < 1) {
      alert("Select a Number");
      return;
    }
    const selectedGuitar = {
      id: guitars[0].id,
      image: image.data.attributes.url,
      name,
      price,
      qty,
    };
    addGuitar(selectedGuitar);
  };
  return (
    <Layout title={`Guitar ${name}`}>
      <div className={styles.guitar}>
        <Image
          width={600}
          height={400}
          src={image.data.attributes.url}
          alt={`Image from api with the name of ${name}`}
        />
        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor='qty'>Quantity:</label>
            <select onChange={(e) => setQty(+e.target.value)} id='qty'>
              <option value=''>-Choose-</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>

            <input type='submit' value='Add to Bag' />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/guitars`);
  const { data } = await res.json();
  const paths = data.map((guitar) => ({
    params: {
      url: guitar.attributes.url,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const res = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const { data: guitars } = await res.json();

  return {
    props: {
      guitars,
    },
  };
}

// info recover is with PARAMS or QUERY-->
// export async function getServerSideProps({ query: { url } }) {
//     const res = await fetch(
//       `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
//     );
//     const { data } = await res.json();

//     return {
//       props: {
//         data,
//       },
//     };
//   }
