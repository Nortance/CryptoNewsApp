import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptosQuery(100);

  return (
    <>
      <div className="padding-mainpage">
        <Row gutter={[25, 25]}>
          {!simplified && (
            <Col span={24}>
              <Select
                showSearch
                className="select-news"
                placeholder="Select a crypto"
                optionFilterProp="children"
                onChange={(value) => setNewsCategory(value)}
                filterOption={(inputValue, option) =>
                  option.children
                    .toLowerCase()
                    .indexOf(inputValue.toLowerCase()) >= 0
                }
              >
                <Option value="Cryptocurrency">Cryptocurrency</Option>
                {data?.data?.coins.map((coin) => (
                  <Option value={coin.name}>{coin.name}</Option>
                ))}
              </Select>
            </Col>
          )}
          {cryptoNews?.value.map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                <a href={news?.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>
                      {news?.name}
                    </Title>
                    <img
                      style={{ width: "110px", height: "110px" }}
                      src={news?.image?.thumbnail?.contentUrl || demoImage}
                      alt="news"
                    />
                  </div>
                  <p>
                    {news?.description.length > 100
                      ? `${news?.description.substring(0, 150)}...`
                      : news?.description}
                  </p>
                  <div className="provider-container">
                    <div>
                      <Avatar
                        src={
                          news?.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoImage
                        }
                      />
                      <Text className="provider-name">
                        {news?.provider[0]?.name}
                      </Text>
                    </div>
                    <Text>{moment(news?.datePublished).fromNow()}</Text>
                  </div>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default News;
