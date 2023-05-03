import styles from "./StepProgress.module.scss";

import { ReactComponent as PgCompleteIcon} from "Icons/pg-complete.svg"


function Progress({number, phase, step}) {
  return (
    <>
    <span className={styles.progressGroup} dataPhase={phase}>
      <span className={styles.progressIcon}>
        <span className={styles.text}>{number}</span>
          <PgCompleteIcon className={`${styles.icon} cursorPoint`}/>
      </span>
      <span className={styles.progressLabel}>{step}</span>
    </span>
    { number !== 3 && (
      <span className= {styles.progressBar} dataOrder={number}></span>
    )}
    </>
  )
}

export default function StepProgress() {
  return(
  <>
  <section className={`${styles.progressContainer} col col-12`}>
    <Progress number={1} phase={'address'} step={'寄送地址'}/>
    <Progress number={2} phase={'shipping'} step={'運送方式'}/>
    <Progress number={3} phase={'creditCard'} step={'付款資訊'}/>
  </section>
  </>
  )
}