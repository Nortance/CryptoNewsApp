import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import { Chart } from "chart.js/auto";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName, timePeriod }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  coinHistory?.data?.history?.forEach((item) => {
    coinPrice.push(item.price);
    coinTimestamp.push(new Date(item.timestamp).toLocaleDateString());
  });

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-cointainer">
          <Title
            level={5}
            className="price-change"
            style={{ color: coinHistory?.data?.change > 0 ? "green" : "red" }}
          >
            {coinHistory?.data?.change} %
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} plugins={[Chart]} />
    </>
  );
};

export default LineChart;
