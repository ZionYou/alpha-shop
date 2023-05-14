
import StepProgress from "./StepProgress/stepProgress";

import Step1 from "./Step/step1";
import Step2 from "./Step/step2";
import Step3 from "./Step/step3";



function Register({ dataPhase, totalPrice }) {
  return (
  <section className="register-container col col-lg-6 col-sm-12" data-phase={dataPhase} data-total-price={totalPrice}>
      <StepProgress />
    <section className="form-container col col-12">
      <Step1 />
      <Step2 />
      <Step3 />
    </section>
  </section>
  )
}

export default Register;