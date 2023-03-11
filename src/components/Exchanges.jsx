import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import exchangesList from "./ExchangesList";
const { Text, Title } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  // const { data, isFetching } = useGetExchangesQuery();
  // const exchangesList = data?.data?.exchanges;
  // Note: To access this endpoint you need premium plan
  // if (isFetching) return <Loader />;

  return (
    <>
      <div className="padding-mainpage">
        <div className="padding-mainpage">
          <Title level={2} style={{ color: "#702B92" }}>
            Not availible due to API cost
          </Title>
          <Row>
            <Col span={6}>Exchanges</Col>
            <Col span={6}>24h Trade Volume</Col>
            <Col span={6}>Markets</Col>
            <Col span={6}>Change</Col>
          </Row>
          <Row>
            {exchangesList.map((exchange, index) => (
              <Col span={24} key={index}>
                <Collapse>
                  <Panel
                    key={exchange.name + exchange.volume}
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
                        <Col span={6}>${millify(Number(exchange.volume))}</Col>
                        <Col span={6}>
                          {millify(Number(exchange.numberOfMarkets))}
                        </Col>
                        <Col span={6}>
                          {millify(Number(exchange.marketShare))}%
                        </Col>
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
