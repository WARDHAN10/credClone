import React from 'react';
import styles from "../all.module.css";

function sectionSix(props) {
    return (
        <div>
             <div className={styles.bg3}>
          <div className="row">
            <div className="col-md-12" style={{ padding: "240px 200px 180px" }}>
              <h1  className={styles.FourText}>
                we take your money
                <br />
                matters seriously.
              </h1>
              <h1 className={styles.FourSubText}>so that you don’t have to.</h1>
              <h3 className={styles.Four2Text} style={{marginTop:"100px"}}>
                never miss a due date with reminders to help you pay your bills
                on time,
                <br /> instant settlements mean you never wait for your payments
                to go through
                <br /> and statement analysis lets you know where your money
                goes, always.
              </h3>
              <button
                type="button"
                className={styles.FourButton}
              >
                Exprience the uprade{" "}
              </button>{" "}
            </div>
          </div>
        </div>
        </div>
    );
}

export default sectionSix;