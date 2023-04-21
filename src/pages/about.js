import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/about.module.css";

function About() {
  return (
    <Layout title={"About Us"} description={"About us Guitar LA, music shop"}>
      <main className='container'>
        <h1 className='heading'>About Us</h1>
        <div className={styles.content}>
          <Image
            src='/img/about.jpg'
            width={1000}
            height={800}
            alt='image about us and take it from gallery'
          />
          <div>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Maecenas vehicula placerat mauris
              at dignissim. Ut malesuada libero nec tellus hendrerit molestie at
              et eros. Integer in quam finibus, sollicitudin mi id, ullamcorper
              mi. Fusce est lectus, gravida non posuere at, porta eu lacus.
              Donec nunc felis, maximus non interdum at, iaculis sed dui.
              Maecenas laoreet tortor diam, fringilla laoreet dolor egestas sit
              amet. In scelerisque volutpat leo, vitae pretium justo volutpat
              vehicula.
            </p>
            <p>
              Donec at porttitor mi, id auctor arcu. Duis sagittis imperdiet
              purus, quis pulvinar purus consequat eu. Integer porttitor orci
              sed pulvinar aliquet. Donec auctor suscipit nisl nec semper.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aliquam hendrerit augue ut
              tellus lobortis pharetra. Donec libero urna, blandit ac imperdiet
              vel, interdum id mi.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
