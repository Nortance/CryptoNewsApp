import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [serarchTerm, setSerarchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(serarchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, serarchTerm]);

  if (isFetching) return <Loader />;
  return (
    <>
      <div className="padding-mainpage">
        {!simplified && (
          <div className="search-crypto">
            <Input
              placeholder="Search Cryptocurrency"
              onChange={(e) => setSerarchTerm(e.target.value)}
            />
          </div>
        )}

        <Row gutter={[25, 25]} className="crypto-card-container">
          {cryptos?.map((currency) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.uuid}
            >
              <Link to={`/crypto/${currency.uuid}`} key={currency.uuid}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  hoverable
                  extra={
                    <img
                      className="crypto-image"
                      src={currency.iconUrl}
                      hoverable
                    />
                  }
                >
                  <p>
                    <strong>Price:</strong> ${Number(currency.price).toFixed(2)}
                  </p>
                  <p>
                    <strong>Change 24h:</strong>{" "}
                    <span
                      style={
                        currency.change < 0
                          ? { color: "red" }
                          : { color: "green" }
                      }
                    >
                      {millify(currency.change)}%
                    </span>
                  </p>
                  <p>
                    <strong>24h Volume:</strong>{" "}
                    {millify(currency.volume, {
                      precision: 2,
                      decimalSeparator: ",",
                    })}
                  </p>
                  <p>
                    <strong>Market Cap:</strong>{" "}
                    {millify(currency.marketCap, {
                      precision: 2,
                      decimalSeparator: ".",
                    })}
                  </p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Cryptocurrencies;
