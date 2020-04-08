import React, { Component } from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
import "./BillingChart.scss";
import DataSet from "@antv/data-set";

class BillingChart extends Component {
  render() {
    var data = [
      {
        month: "Enero",
        ACME: 162,
        Compitor: 42
      },
      {
        month: "Febrero",
        ACME: 134,
        Compitor: 54
      },
      {
        month: "Marzo",
        ACME: 116,
        Compitor: 26
      },
      {
        month: "Abril",
        ACME: 122,
        Compitor: 32
      },
      {
        month: "Mayo",
        ACME: 178,
        Compitor: 68
      },
      {
        month: "Junio",
        ACME: 144,
        Compitor: 54
      },
      {
        month: "Julio",
        ACME: 125,
        Compitor: 35
      },
      {
        month: "Agosto",
        ACME: 176,
        Compitor: 66
      },
      {
        month: "Septiembre",
        ACME: 156
      },
      {
        month: "Octubre",
        ACME: 195
      },
      {
        month: "Noviembre",
        ACME: 215
      },
      {
        month: "Diciembre",
        ACME: 176,
        Compitor: 36
      }
    ];
    var dv = new DataSet.View().source(data);
    dv.transform({
      type: "fold",
      fields: ["ACME", "Compitor"],
      key: "type",
      value: "value"
    });
    const scale = {
      value: {
        alias: "Precio en Euros",
        formatter: function(val) {
          return "€" + val;
        }
      },
      month: {
        range: [0, 1]
      }
    };
    return (
      <div style={{ width: 550, height: 500 }}>
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
