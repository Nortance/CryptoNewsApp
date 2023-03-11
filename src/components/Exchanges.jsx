import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import {} from "./exchangesData";

const { Text, Title } = Typography;
const { Panel } = Collapse;

const exchangesList = [
  {
    uuid: "1",
    rank: 1,
    iconUrl: "https://example.com/exchange1.png",
    name: "Barkr",
    volume: 1234567,
    numberOfMarkets: 100,
    marketShare: 10,
    description: "<p>Description of Barkr</p>",
  },
  {
    uuid: "2",
    rank: 2,
    iconUrl: "https://example.com/exchange2.png",
    name: "Woofbase",
    volume: 2345678,
    numberOfMarkets: 200,
    marketShare: 20,
    description: "<p>Description of Woofbase</p>",
  },
  {
    uuid: "3",
    rank: 3,
    iconUrl: "https://example.com/exchange3.png",
    name: "DoggieX",
    volume: 3456789,
    numberOfMarkets: 300,
    marketShare: 30,
    description: "<p>Description of DoggieX</p>",
  },
  {
    uuid: "4",
    rank: 4,
    iconUrl: "https://example.com/exchange4.png",
    name: "Fido Trading",
    volume: 4567890,
    numberOfMarkets: 400,
    marketShare: 40,
    description: "<p>Description of Fido Trading</p>",
  },
  {
    uuid: "5",
    rank: 5,
    iconUrl: "https://example.com/exchange5.png",
    name: "Golden Paws Exchange",
    volume: 5678901,
    numberOfMarkets: 500,
    marketShare: 50,
    description: "<p>Description of Golden Paws Exchange</p>",
  },
  {
    uuid: "6",
    rank: 6,
    iconUrl: "https://example.com/exchange6.png",
    name: "Pawtrading",
    volume: 6789012,
    numberOfMarkets: 600,
    marketShare: 60,
    description: "<p>Description of Pawtrading</p>",
  },
  {
    uuid: "7",
    rank: 7,
    iconUrl: "https://example.com/exchange7.png",
    name: "Barking Exchange",
    volume: 7890123,
    numberOfMarkets: 700,
    marketShare: 70,
    description: "<p>Description of Barking Exchange</p>",
  },
  {
    uuid: "8",
    rank: 8,
    iconUrl: "https://example.com/exchange8.png",
    name: "Hound Market",
    volume: 8901234,
    numberOfMarkets: 800,
    marketShare: 80,
    description: "<p>Description of Hound Market</p>",
  },
  {
    uuid: "9",
    rank: 9,
    iconUrl: "https://example.com/exchange9.png",
    name: "Dogecoin Depot",
    volume: 9012345,
    numberOfMarkets: 900,
    marketShare: 90,
    description: "<p>Description of Dogecoin Depot</p>",
  },
  {
    uuid: "10",
    rank: 10,
    iconUrl: "https://example.com/exchange10.png",
    name: "Poodle Trading",
    volume: 1234567,
    numberOfMarkets: 1000,
    marketShare: 100,
    description: "<p>Description of Poodle Trading</p>",
  },
  {
    uuid: "1",
    rank: 1,
    iconUrl: "https://example.com/exchange1.png",
    name: "Barkr",
    volume: 1234567,
    numberOfMarkets: 100,
    marketShare: 10,
    description: "<p>Description of Barkr</p>",
  },
  {
    uuid: "2",
    rank: 2,
    iconUrl: "https://example.com/exchange2.png",
    name: "Woofbase",
    volume: 2345678,
    numberOfMarkets: 200,
    marketShare: 20,
    description: "<p>Description of Woofbase</p>",
  },
  {
    uuid: "3",
    rank: 3,
    iconUrl: "https://example.com/exchange3.png",
    name: "DoggieX",
    volume: 3456789,
    numberOfMarkets: 300,
    marketShare: 30,
    description: "<p>Description of DoggieX</p>",
  },
  {
    uuid: "4",
    rank: 4,
    iconUrl: "https://example.com/exchange4.png",
    name: "Fido Trading",
    volume: 4567890,
    numberOfMarkets: 400,
    marketShare: 40,
    description: "<p>Description of Fido Trading</p>",
  },
  {
    uuid: "5",
    rank: 5,
    iconUrl: "https://example.com/exchange5.png",
    name: "Golden Paws Exchange",
    volume: 5678901,
    numberOfMarkets: 500,
    marketShare: 50,
    description: "<p>Description of Golden Paws Exchange</p>",
  },
];

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  // const exchangesList = data?.data?.exchanges;
  // Note: To access this endpoint you need premium plan
  if (isFetching) return <Loader />;

  return (
    <>
      <div className="padding-mainpage">
        <div className="padding-mainpage">
          <Title level={2} style={{ color: "red" }}>
            Not availible due to API cost
          </Title>
          <Row>
            <Col span={6}>Exchanges</Col>
            <Col span={6}>24h Trade Volume</Col>
            <Col span={6}>Markets</Col>
            <Col span={6}>Change</Col>
          </Row>
          <Row>
            {exchangesList.map((exchange) => (
              <Col span={24}>
                <Collapse>
                  <Panel
                    key={exchange.uuid}
                    showArrow={false}
                    header={
                      <Row key={exchange.uuid}>
                        <Col span={6}>
                          <Text>
                            <strong>{exchange.rank}.</strong>
                          </Text>
                          <Avatar
                            className="exchange-image"
                            src={
                              "https://cdn.vectorstock.com/i/1000x1000/17/14/dog-step-gold-coin-vector-19271714.webp"
                            }
                          />
                          <Text>
                            <strong>{exchange.name}</strong>
                          </Text>
                        </Col>
                        <Col span={6}>${millify(exchange.volume)}</Col>
                        <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                        <Col span={6}>{millify(exchange.marketShare)}%</Col>
                      </Row>
                    }
                  >
                    {HTMLReactParser(exchange.description || "")}
                  </Panel>
                </Collapse>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Exchanges;
