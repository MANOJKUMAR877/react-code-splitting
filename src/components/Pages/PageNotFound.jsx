import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h1> 404 - Page Not Found </h1>
        <Link to="/">
          <Button  className="button" label={"Take Me To Home"} ></Button>
        </Link>
      </div>
    );
  }
}
