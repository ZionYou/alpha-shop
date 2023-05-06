import styles from "./Cart.module.scss";

import ProductInfo from "./Product/productInfo";
import { productData } from "./Product/productData"

function Cart() {
  let sum = 0
  productData.forEach(data => {
    sum += (data.price * data.quantity) 
  })

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={`col col-12`} data-total-price={0}>
        {productData.map(data => 
          <ProductInfo key={data.id} {...data}/>
        )}
      </section>
      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price} >免費</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>{sum}</div>
      </section>
    </section>
  )
}

export default Cart;