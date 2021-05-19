import React from "react";
import wicket from "../core/img/wicket.png";
import { Link } from "react-router-dom";
import styles from "../all.module.css";

function sectionThree(props) {
  return (
    <div>
      <div className={styles.bg} style={{ width: "100%" }}>
        <div className="row">
          <div className="col-md-8" style={{ padding: "240px 200px 180px" }}>
            <h1 className={styles.ThreeText}>CRED x IPL</h1>
            <h1 className={styles.threeSubText}>
              this Vivo IPL 2021, pay your credit card bills on CRED to win 100%
              cash-back and daily jackpots.
            </h1>
            <button
              type="button"
              className={styles.threeDownload}
            >
              Download CRED
            </button>{" "}
            <Link className={styles.ThreeKnowMore}>Know More <i class="fa fa-external-link-square" aria-hidden="true"></i>


</Link>
          </div>
          <div className="col-md-4 float-right">
            <img src={wicket} width="600px" height="850px" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default sectionThree;
