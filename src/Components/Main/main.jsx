import styles from "./Main.module.scss";



import Register from "./Register/register";
import Cart from "./Cart/cart";
import ProgressControl from "./ProgressControl/progressControl ";



function Main() {
  return (
    <main className= {styles.siteMain} >
     <div className= {styles.mainContainer}>
      <Register />
      <Cart />
      <ProgressControl />
     </div>
    </main>
  )
}

export default Main;