import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import {
  faComment,
  faBriefcase,
  faTools,
  faCamera,
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
// import { github } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tab from "react-bootstrap/Tab";
import Collapse from "react-bootstrap/Collapse";

import PortfolioInformation from "../Components/PortfolioInformation"

export default function Home() {

  const [cardContentOpen, setOpen] = useState(false);

  let menuArrow;
  if (!cardContentOpen) {
    menuArrow = <FontAwesomeIcon icon={faChevronCircleDown} />
  } else {
    menuArrow = <FontAwesomeIcon icon={faChevronCircleUp} />
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Avi Perl</title>
        <meta
          name="description"
          content="Developer portfolio for Avrohom Perl, a Python and PHP developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="moving-card">
          <div className={styles.card}>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-4 d-flex justify-content-center">
                  <img
                    alt="My Logo"
                    className={styles.logo}
                    src="logo-small.png"
                  />
                </div>
                <div className="col-sm-8">
                  <div className={styles.card_details}>
                    <div className={styles.name}>Avi Perl</div>
                    <div className={styles.occupation}>
                      Developer
                      <span className={styles.occupation_note}>
                        # Current ➔ TransUnion
                      </span>
                    </div>
                    <div className={styles.card_about}>
                      <div className={styles.item}>
                        <a className="antiphonespam">516[antiphonespam]9370</a>
                        <a className="antiemailspam">
                          info[antiemailspam]avrohomperl.com
                        </a>
                      </div>
                    </div>
                    <div id="skills" className={styles.skills}>
                      <Collapse in={!cardContentOpen}>
                        <span className={styles.value}>
                          Python & PHP developer focused on web development,
                          obsessed with automation, and passionate about
                          application architecture.
                        </span>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Collapse in={cardContentOpen}>
              <div className={"card-footer " + styles.card_content}>
                <div id="example-collapse-text">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <PortfolioInformation />
                  </Tab.Container>
                </div>
              </div>
            </Collapse>
          </div>
          <div className={styles.card_footer}>
            <div
              className={styles.menuIcon}
              onClick={() => setOpen(!cardContentOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={cardContentOpen}
            >
              {menuArrow}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}