import { Guitar } from "@/components/guitar";
import Layout from "@/components/layout";
import styles from "../styles/grid.module.css";

function Cart({ guitars }) {
  console.log(guitars);
  return (
    <Layout
      title={"Shopping Cart"}
      description={"Shopping cart Guitar LA, music shop"}
    >
      <main className='container'>
        <h2 className='heading'>Collection</h2>
        <div className={styles.grid}>
          {guitars?.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Cart;

// STATIC FUNCTION WITH NEXT BUILD IN EVERY CHANGE -->
// export async function getStaticProps() {
//   const res = await fetch(`${process.env.API_URL}/guitars/?populate=image`);
//   const { data: guitars } = await res.json();

//   return {
//     props: {
//       guitars,
//     },
//   };
// }

//FUNCTION TO UPDATE CONSTANTLY
export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/guitars/?populate=image`);
  const { data: guitars } = await res.json();

  return {
    props: {
      guitars,
    },
  };
}
