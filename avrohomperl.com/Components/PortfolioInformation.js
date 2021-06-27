import { useRouter } from "next/router";

import React from "react";
import { useCallback } from "react";
import styles from "../styles/PortfolioInformation.module.css";
import {
  faComment,
  faBriefcase,
  faTools,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactHtmlParser from "react-html-parser";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class TabContent {
  constructor(
    key = "first",
    icon = <FontAwesomeIcon icon={faBriefcase} />,
    title = "Title goes here",
    content = "<strong>Big</strong> HTML goes here"
  ) {
    this.key = key;
    this.icon = icon;
    this.title = title;
    this.content = content;
  }
}

function PortfolioInformation() {
  const state = [
    new TabContent(
      "contact",
      <FontAwesomeIcon icon={faComment} />,
      "Chat With Me",
      "<p>I'm happy to have a no-pressure conversation, please feel free to reach out with any sort of question.</p>"
    ),
    new TabContent(
      "hire",
      <FontAwesomeIcon icon={faBriefcase} />,
      "Hire Me",
      "<p>Yes, I would love to talk to you about a contracting opportunity! If I am not a match for your project, I'll try to make a referral.</p><h3>Services</h3><p>Website Development • API Development • Web Scraping • Data Manipulation &amp; ETL • Process Automation</p>"
    ),
    new TabContent(
      "tools",
      <FontAwesomeIcon icon={faTools} />,
      "My Toolkit",
      `<div class="row">
          <div class="col">
              <h3>What I'm proficient with</h3>
              <p class="m-0">PHP • Python • Bash</p>
              <hr class="m-0">
              <p class="m-0">HTML • CSS • JS</p>
              <hr class="m-0">
              <p class="m-0">Django • Flask • FastAPI</p>
              <hr class="m-0">
              <p class="m-0">Database Design • SQL</p>
          </div>
          <div class="col">
              <h3>What I'm learning</h3>
              <p class="m-0">AWS</p>
              <hr class="m-0">
              <p class="m-0">Node • React • Vue</p>
          </div>
      </div>`
    ),
    new TabContent(
      "photo",
      <FontAwesomeIcon icon={faCamera} />,
      "Commercial Photography",
      `<p>
        I am currently limiting my photography services as I focus on my family and
        software development.
      </p>
      <p>Please look up my friends who do amazing work:</p>
      <a href="http://hudigreenberger.com/" target="none">Hudi Greenberger</a>
      <br />
      <a href="https://www.yechielorgel.com/" target="none">Yechiel Orgel</a>
      <br />
      <a href="https://www.ellteephoto.com/" target="none">Levi Teitlebaum</a>
      `
    ),
  ];

  const router = useRouter();
  var activeKey = router.query.tab;
  // Make sure the tab passed is real
  var valid_tab_keys = [];
  state.forEach((x, i) => valid_tab_keys.push(x.key));
  if (!valid_tab_keys.includes(activeKey)) {
    activeKey = undefined;
  }

  function updateActiveKey(newKey) {
    activeKey = newKey;
    router.push(
      {
        pathname: "/",
        query: { tab: newKey },
      },
      undefined,
      { shallow: true }
    );
  }

  return (
    <Tab.Container activeKey={activeKey} defaultActiveKey={state[0].key}>
      <Row>
        <Col sm={2}>
          <Nav>
            {state.map((data) => (
              <Nav.Item>
                <Nav.Link
                  eventKey={data.key}
                  className={styles.PortfolioPill}
                  onSelect={() => updateActiveKey(data.key)}
                >
                  <div className={styles.PortfolioIcon}> {data.icon} </div>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            {state.map((data) => (
              <Tab.Pane eventKey={data.key}>
                <h1> {data.title} </h1> {ReactHtmlParser(data.content)}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default PortfolioInformation;
