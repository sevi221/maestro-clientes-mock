import React, { Component } from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
import "./BillingChart.scss";
import DataSet from "@antv/data-set";

class BillingChart extends Component {
  render() {
    var data = [
      {
        month: "Enero",
        CLIENTE: 162,
        Compitor: 42,
      },
      {
        month: "Febrero",
        CLIENTE: 134,
        Compitor: 54,
      },
      {
        month: "Marzo",
        CLIENTE: 116,
        Compitor: 26,
      },
      {
        month: "Abril",
        CLIENTE: 122,
        Compitor: 32,
      },
      {
        month: "Mayo",
        CLIENTE: 178,
        Compitor: 68,
      },
      {
        month: "Junio",
        CLIENTE: 144,
        Compitor: 54,
      },
      {
        month: "Julio",
        CLIENTE: 125,
        Compitor: 35,
      },
      {
        month: "Agosto",
        CLIENTE: 176,
        Compitor: 66,
      },
      {
        month: "Septiembre",
        CLIENTE: 156,
      },
      {
        month: "Octubre",
        CLIENTE: 195,
      },
      {
        month: "Noviembre",
        CLIENTE: 215,
      },
      {
        month: "Diciembre",
        CLIENTE: 176,
        Compitor: 36,
      },
    ];
    var dv = new DataSet.View().source(data);
    dv.transform({
      type: "fold",
      fields: ["CLIENTE", "Compitor"],
      key: "type",
      value: "value",
    });
    const scale = {
      value: {
        alias: "Precio en Euros",
        formatter: function (val) {
          return "€" + val;
        },
      },
      month: {
        range: [0, 1],
      },
    };
    return (
      <div>
        <Chart data={dv} padding={"auto"} scale={scale} forceFit>
          <Tooltip crosshairs />
          <Axis />
          <Legend />
          <Geom
            type="area"
            position="month*value"
            color="type"
            shape="smooth"
          />
          <Geom
            type="line"
            position="month*value"
            color="type"
            shape="smooth"
            size={2}
          />
        </Chart>
      </div>
    );
  }
}

export default BillingChart;
