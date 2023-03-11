import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(12);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic value={globalStats.total} title="Total Cryptocurrencies" />
        </Col>
        <Col span={12}>
          <Statistic
            value={millify(globalStats.totalExchanges)}
            title="Total Exchanges"
          />
        </Col>
        <Col span={12}>
          <Statistic
            value={millify(globalStats.totalMarketCap)}
            title="Total Market Cap"
          />
        </Col>
        <Col span={12}>
          <Statistic
            value={millify(globalStats.total24hVolume)}
            title="Total 24h Volume"
          />
        </Col>
        <Col span={12}>
          <Statistic
            value={millify(globalStats.totalMarkets)}
            title="Total Markets"
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the word
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest crypto news
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
