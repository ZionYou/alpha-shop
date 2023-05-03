import styles from "./ProgressControl.module.scss";

import { ReactComponent as RightArrowIcon} from 'Icons/right-arrow.svg';
// import { ReactComponent as LeftArrowIcon} from 'Icons/left-arrow.svg';

// function PreviousStep() {
//   return (
//     <button className={styles.prev}>
//       <LeftArrowIcon class="cursorPoint" />
//       上一步
//     </button>
//   )
// }

function NextStep() {
  return (
    <button className={styles.next}>
      下一步
      <RightArrowIcon class="cursorPoint" />
    </button>
  )
}

export default function ProgressControl() {
  return (
    <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
      <section className={`${styles.buttonGroup} col col-12`} data-phase="address">
        <NextStep />
      </section>
      {/* <section className={`${styles.buttonGroup} col col-12`} data-phase="shipping">
        <PreviousStep />
        <NextStep />
      </section>
      <section className={`${styles.buttonGroup} col col-12`} data-phase="credit-card">
        <PreviousStep />
        <button className={styles.next}>確認下單</button>
      </section> */}
    </section>
  )
}