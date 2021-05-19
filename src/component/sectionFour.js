import React from 'react';
import styles from "../all.module.css";

function sectionFour(props) {
    return (
        <div>
          <div className={styles.bg2}>
          <div className="row">
            <div className="col-md-12" style={{ padding: "240px 200px 180px" }}>
              <h1  className={styles.FourText}>
                feel special <br /> more often.
              </h1>
              <h1 className={styles.FourSubText}>
                exclusive rewards for paying your bills
              </h1>
              <h3 className={styles.Four2Text}>
                <br />
                <br />
                <br />
                every time you pay your credit card bills on CRED, you receive
                CRED coins.<br />
              you can use these to win exclusive rewards or get special
                access to curated<br />
                products and experiences. on CRED, good begets good
              </h3>
              <button
                type="button"
                className={styles.FourButton}
              >
                Explore rewards{" "}
              </button>{" "}
            </div>
          </div>
        </div>  
        </div>
    );
}

export default sectionFour;