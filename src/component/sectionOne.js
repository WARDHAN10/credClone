import React from 'react';
import styles from "../all.module.css";
import "../styles.css"
function sectionOne(props) {
    return (
        <div>
           <h1
        className={styles.mainHeading}
      >
        rewards for paying <br />
        credit card bills.
      </h1>
      <h1
        className={styles.OneText}
      >
        join 5.9M+ members and win reward worth ₹5 crores daily.
      </h1>
      <div class="col-md-12 text-center" style={{ marginTop: "10px" }}>
        <button
          type="button"
          className={styles.Dbutton}
        >
          Download CRED
        </button>
      </div> 
        </div>
    );
}

export default sectionOne;