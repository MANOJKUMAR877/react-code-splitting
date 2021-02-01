import React, { Component } from "react";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";
export default class TakeMeToChartButoon extends Component {
  render() {
    return (
      <div>
        <Link to="/chart">
          <Button data-testId="takeMeToChart" label={"Take Me To Chart"} />
        </Link>
      </div>
    );
  }
}
