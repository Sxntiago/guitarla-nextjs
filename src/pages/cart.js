import React from "react";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/cart.module.css";

function Cart({ cart, updateQty, deleteGuitar }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fullyTotal = cart.reduce(
      (total, item) => total + item.qty * item.price,
      0
    );
    setTotal(fullyTotal);
  }, [cart]);

  return (
    <Layout title='GuitarLa - Shopping Cart'>
      <main className='container'>
        <h1 className='heading'>Cart</h1>
        <div className={styles.content}>
          <div className={styles.cart}>
            <h2>Items</h2>
            {cart.length === 0
              ? "Empty Cart"
              : cart.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        alt={item.name}
                        src={item.image}
                      />
                    </div>
                    <div>
                      <p className={styles.name}>{item.name}</p>

                      <div className={styles.qty}>
                        <p>Quantity:</p>
                        <select
                          className={styles.select}
                          onChange={(e) =>
                            updateQty({
                              id: item.id,
                              qty: e.target.value,
                            })
                          }
                          value={item.qty}
                        >
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                        </select>
                      </div>

                      <p className={styles.price}>
                        $<span>{item.price}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $<span>{item.qty * item.price}</span>
                      </p>
                    </div>
                    <button
                      onClick={() => deleteGuitar(item.id)}
                      className={styles.delete}
                      type='button'
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
          <aside className={styles.summary}>
            <h3>Order Summary</h3>
            <p>Total: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}

export default Cart;
