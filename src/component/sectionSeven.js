import React from "react";
import styles from "../all.module.css";

import Fade from "react-reveal/Fade";
import mobile from "../core/img/mobile.png"
function sectionSeven(props) {
  return (
    <div>
      <div className={styles.bg4}>
        <div className="row"  style={{ padding: "240px 200px 250px" }}>
       
            <div className="col-md-6" style={{ marginTop: "100px" }}>
              <Fade bottom>
                <h1 className={styles.sevenText}>
                  we got <br />
                  your back
                </h1>
                <h3 className={styles.sevensubText}>
                  never miss a due date with reminders to help you pay your
                  bills on time,
                  <br /> instant settlements mean you never wait for your
                  payments to go through
                  <br /> and statement analysis lets you know where your money
                  goes, always.
                </h3>
              </Fade>

              <Fade bottom>
                <h1 className={styles.sevenText}>
                  bring your
                  <br /> winning streak
                </h1>
                <h3 className={styles.sevensubText}>
                  never miss a due date with reminders to help you pay your
                  bills on time,
                  <br /> instant settlements mean you never wait for your
                  payments to go through
                  <br /> and statement analysis lets you know where your money
                  goes, always.
                </h3>
              </Fade>
              <Fade bottom>
                <h1 className={styles.sevenText}>
                  for your <br /> eclectic taste
                </h1>
                <h3 className={styles.sevensubText}>
                  get access to the CRED Store, a member-exclusive selection of
                  products
                  <br /> and experiences at special prices that complement your
                  taste. this is
                  <br /> the good life they speak of. more
                </h3>
              </Fade>

              <Fade bottom>
                <h1 className={styles.sevenText}>
                  more cash
                  <br /> in your pockets.
                </h1>
                <h3 className={styles.sevensubText}>
                  switch to CRED RentPay and start paying rent with your credit
                  card. this
                  <br /> way you get up to 45 days of credit free period, more
                  reward points and
                  <br /> a happy landlord.
                </h3>
              </Fade>
            </div>

            <div className="col-md-6 text-center" style={{ marginTop: "100px" }}>
              <img src={mobile} alt="" className={styles.imgM}     width= "350px"  height="600px" />
            </div>
          
     
          </div>
        </div>
      </div>
  );
}

export default sectionSeven;
