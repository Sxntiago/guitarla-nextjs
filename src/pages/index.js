import { Guitar } from "@/components/guitar";
import Layout from "@/components/layout";
import styles from "../styles/grid.module.css";
import Post from "@/components/post";
import { Course } from "@/components/course";

export default function Home({ guitars, posts, course }) {
  return (
    <>
      <Layout title={"Home"} description={"Music Blog and guitar shop"}>
        <main className='container'>
          <h1 className='heading'>Collection</h1>
          <div className={styles.grid}>
            {guitars?.map((guitar) => (
              <Guitar key={guitar.id} guitar={guitar.attributes} />
            ))}
          </div>
        </main>

        <Course course={course} />

        <section className='container'>
          <h2 className='heading'></h2>
          <div className={styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const guitarUrl = `${process.env.API_URL}/guitars?populate=image`;
  const postUrl = `${process.env.API_URL}/posts?populate=image`;
  const courseUrl = `${process.env.API_URL}/course?populate=image`;

  const [guitarRes, postRes, courseRes] = await Promise.all([
    fetch(guitarUrl),
    fetch(postUrl),
    fetch(courseUrl),
  ]);
  const [{ data: guitars }, { data: posts }, { data: course }] =
    await Promise.all([guitarRes.json(), postRes.json(), courseRes.json()]);

  return {
    props: {
      guitars,
      posts,
      course,
    },
  };
}
