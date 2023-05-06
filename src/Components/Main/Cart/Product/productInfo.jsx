import styles from "./Product.module.scss";

// 引入 svg、圖片
import { ReactComponent as PlusIcon } from "Icons/plus.svg"
import { ReactComponent as MinusIcon } from "Icons/minus.svg"


function  ProductInfo({ id, name, img, price, quantity }) {
  return (
    <div
      className={`${styles.productContainer} col col-12`}
      key={id} 
      data-count={quantity} 
      data-price={price}
    >
      <img
        className={styles.imgContainer}
        src={img}
        alt="cart item img"
      />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <MinusIcon className={`${styles.productAction} minus`}/>
            <span className={styles.productCount} >{quantity}</span>
            <PlusIcon className={`${styles.productAction} plus`}/>
          </div>
        </div>
        <div className={styles.price} >${price}</div>
      </div>
    </div>
  )
}


export default ProductInfo;
