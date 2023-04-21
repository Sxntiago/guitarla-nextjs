import Layout from "@/components/layout";
import Post from "@/components/post";
import styles from "../styles/grid.module.css";

function Blog({ posts }) {
  console.log(posts);
  return (
    <Layout title={"Blog"} description={"Blog Guitar LA, music shop"}>
      <main className='container'>
        <h1 className='heading'>Blog</h1>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Blog;

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/posts?populate=image`);
  const { data: posts } = await res.json();

  return {
    props: {
      posts,
    },
  };
}
