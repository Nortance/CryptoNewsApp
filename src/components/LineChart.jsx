import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import { Chart } from "chart.js/auto";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const [coinPrice, setCoinPrice] = useState([]);
  const [coinTimestamp, setCoinTimestamp] = useState([]);
  const [chartKey, setChartKey] = useState(Date.now());

  useEffect(() => {
    const price = [];
    const timestamp = [];

    coinHistory?.data?.history?.forEach((item) => {
      price.push(item.price);
      const date = new Date(item.timestamp * 1000);
      timestamp.push(date.toLocaleDateString());
    });

    setCoinPrice(price);
    setCoinTimestamp(timestamp);
    setChartKey(Date.now());
  }, [coinHistory]);

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
        tics: {
          beginAtZero: true,
        },
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
      <Line key={chartKey} data={data} options={options} />
    </>
  );
};

export default LineChart;
