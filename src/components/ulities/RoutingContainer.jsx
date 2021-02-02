import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TakeMeToChartButoon from "../Pages/TakeMeToChartButoon";
import LineCharts from "../Chart/LineCharts";
import PageNotFound from "../Pages/PageNotFound";
export default class RoutingContainer extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={TakeMeToChartButoon} exact />
            <Route path="/chart" component={LineCharts} exact />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
