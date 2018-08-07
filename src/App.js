import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { css, StyleSheet } from "aphrodite";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routeConfig from "./routeConfig";

import LeftNav from "./components/LeftNav";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <h1 className={css(styles.heading)}>Tattoo Sleeve Design Ideas:</h1>
          </Row>
          <Row>
            <Col xs="12" sm="3">
              <LeftNav />
            </Col>
            <Col xs="12" sm="9">
              {routeConfig.map((route, i) => (
                <React.Fragment>
                  <Route
                    key={i}
                    path={route.path}
                    component={route.component}
                  />
                </React.Fragment>
              ))}
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    margin: "25px 0"
  }
});

export default App;
