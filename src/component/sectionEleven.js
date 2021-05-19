import React from "react";
import styles from "../all.module.css";
import ratinga from "../core/img/ratinga.png";
import ratingi from "../core/img/ratingi.png";
import apple from "../core/img/apple.png";
import play from "../core/img/play.png";
function sectionEleven(props) {
  return (
    <div>
      <div className={styles.bg4}>
        <div className="row" style={{ padding: "200px" }}>
          <div className="col-4 text-center">
            <h1 className={styles.elevenText}>4.8</h1>
          </div>
          <div className="col-2 float-md-right">
            <h1 className={styles.elevenTextstore}>
              app
              <br /> store{" "}
            </h1>
          </div>
          <div className="col-2 text-center">
            <h1 className={styles.elevenText}>4.7</h1>
          </div>
          <div className="col-4 float-right">
            <h1 className={styles.elevenTextstore}>
              play
              <br /> store{" "}
            </h1>
          </div>
          <div className="row">
            <div className="col text-center" style={{ marginTop: "20px" }}>
              {" "}
              <img src={ratinga} alt="" width="179px" height="28px" />
            </div>
            <div className="col text-right" style={{ marginTop: "20px" }}>
              {" "}
              <img src={ratingi} alt="" width="179px" height="28px" />
            </div>
          </div>{" "}
          <div className="row">
            <div className="col text-center">
              {" "}
              <button type="button" className={styles.btnDownloadL}>
                <img src={apple} alt="" width="44px" style={{marginRight:"5px"}}/>
                Downlaod the app
              </button>{" "}
            </div>
            <div className="col text-center">
              {" "}
              <button type="button" className={styles.btnDownloadR} >
              <img src={play} alt="" width="44px" style={{marginRight:"5px"}}/>

                 Downlaod the app{" "}
              </button>{" "}
            </div>
          </div>
          <div>
            <p className="text-white text-center" style={{ marginTop: "50px" }}>
              "this is a great app loaded with functionality and simplicity yet
              elegant and intuitive. a must have for the
              <br /> plastic money users. keeps me in financial discipline and
              helps me take the billing and payment worries
              <br /> out of my mind"
              <br />
              <br />
              ranesh bhattacharya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sectionEleven;
