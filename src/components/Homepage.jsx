import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";
import Loader from "./Loader";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(12);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <div className="padding-mainpage">
        <Title level={2} className="heading">
          Global Crypto Stats
        </Title>
        <Row gutter={[32, 32]} style={{ paddingLeft: "20px" }}>
          <Col span={12}>
            <Statistic
              title="Market Cap"
              value={`${millify(globalStats.totalMarketCap)}`}
              precision={2}
              prefix="$"
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="24h Volume"
              value={`${millify(globalStats.total24hVolume)}`}
              precision={2}
              prefix="$"
            />
          </Col>
          <Col span={12}>
            <Statistic title="Cryptocurrencies" value={globalStats.total} />
          </Col>
          <Col span={12}>
            <Statistic title="Exchanges" value={globalStats.totalExchanges} />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Market"
              value={`${millify(globalStats.totalMarkets)}`}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Markets"
              value={`${millify(globalStats.totalMarkets)}`}
            />
          </Col>
        </Row>
        <div className="home-heading-container">
          <Title level={2} className="home-title">
            Top 10 Cryptocurrencies in the world
          </Title>
          <Title level={3} className="show-more">
            <Link style={{ color: "#702B92" }} to="/cryptocurrencies">
              Show More
            </Link>
          </Title>
        </div>
        <Cryptocurrencies simplified />
        <div className="home-heading-container">
          <Title level={2} className="home-title">
            Latest Crypto News
          </Title>
          <Title level={3} className="show-more">
            <Link style={{ color: "#702B92" }} to="/news">
              Show More
            </Link>
          </Title>
        </div>
        <News simplified />
      </div>
    </>
  );
};

export default Homepage;
