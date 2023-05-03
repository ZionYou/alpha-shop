import styles from "./RegisterForm.module.scss";



import Step1 from "./step1";
// import Step2 from "./step2";
// import Step3 from "./step3";




function RegisterFrom() {
  return (
  <section className={`${styles.formContainer} col col-12`}>
    <Step1 />
    {/* <Step2 />
    <Step3 /> */}
  </section>
  )
}

export default RegisterFrom;