import React, { Component } from "react";
import apiFetch from "../ulities/fetchApi";
import Loading from "../Pages/Loading";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default class LineCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount = async () => {
    let apivalue = await apiFetch();
    this.setState({ loading: false, data: apivalue });
  };
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loading value={"Loading...... Wait For a Minute"} />
        ) : (
          <LineChart
            width={1100}
            height={700}
            data={this.state.data.data}
            margin={{ top: 55, right: 30, left: 120, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis padding={{ left: 20 }} domain={[0, 50]} />
            <YAxis type="number" domain={[25, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="data_error" stroke="#8884d8" />
            <Line type="monotone" dataKey="incoming_data" stroke="#82ca9d" />
          </LineChart>
        )}
      </div>
    );
  }
}
