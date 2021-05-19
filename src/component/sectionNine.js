import React from "react";
import styles from "../all.module.css";

function sectionSix(props) {
  return (
    <div>
      <div className={styles.bg6}>
        <div className="row">
          <div className="col-md-12" style={{ padding: "240px 200px 180px" }}>
            <h1 className={styles.FourText}>
            security first.
              <br />
              and second.
            </h1>
            <h1 className={styles.FourSubText}>what’s yours remains only yours.
</h1>
            <h3 className={styles.Four2Text} style={{ marginTop: "60px" }}>
            CRED ensures that all your personal data and transactions are encrypted,
              <br /> and secured so what’s yours remains only yours. there’s no room for
              <br /> mistakes because we didn’t leave any.

            </h3>
            <button type="button" className={styles.FourButton}>
              Become a member{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default sectionSix;
