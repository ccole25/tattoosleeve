import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { css, StyleSheet } from "aphrodite";
import routeConfig from "../routeConfig";

class LeftNav extends Component {
  render() {
    return (
      <div className={css(styles.leftNav)}>
        <ListGroup className={css(styles.list)}>
          {routeConfig.map(route => (
            <ListGroupItem className={css(styles.listItem)}>
              <Link className={css(styles.link)} to={route.path}>
                {route.text}
              </Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    display: "flex",
    width: "100%"
  },
  listItem: {
    padding: 0
  },
  link: {
    display: "flex",
    alignItems: "stretch",
    textDecoration: "none",
    padding: "10px 15px"
  }
});

export default LeftNav;
