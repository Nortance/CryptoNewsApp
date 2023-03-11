import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const { Title } = Typography;

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Title level={5} style={{ color: "white", textAlign: "center" }}>
            Copyright © 2021
            <Link style={{ color: "#702B92" }} to="/">
              {" "}
              Cryptoverse Inc.
            </Link>{" "}
            <br />
            All Rights Reserved.
          </Title>
          <Space>
            <Link style={{ color: "#702B92" }} to={"/"}>
              Home
            </Link>
            <Link style={{ color: "#702B92" }} to={"exchanges"}>
              Exchanges
            </Link>
            <Link style={{ color: "#702B92" }} to={"/news"}>
              News
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
