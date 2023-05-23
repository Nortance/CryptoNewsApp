import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const [current, setCurrent] = useState("home");
  const location = useLocation();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setCurrent("home");
        break;
      case "/cryptocurrencies":
        setCurrent("crypto");
        break;
      case "/exchanges":
        setCurrent("exchanges");
        break;
      case "/news":
        setCurrent("news");
        break;
      default:
        setCurrent("home");
    }
  }, [location]);

  const StyledMenuItem = ({ icon, text, link, selected, onClick }) => (
    <Menu.Item
      key={text.toLowerCase()}
      icon={icon}
      style={{
        backgroundColor: selected ? "#702B92" : "",
        "&:hover": {
          backgroundColor: selected ? "#702B92" : "#001529",
        },
      }}
      onClick={onClick}
    >
      <Link to={link}>{text}</Link>
    </Menu.Item>
  );
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size={50} />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark" selectedKeys={[current]}>
          <StyledMenuItem
            icon={<HomeOutlined />}
            text="Home"
            link="/"
            selected={current === "home"}
            onClick={() => setCurrent("home")}
          />
          <StyledMenuItem
            icon={<FundOutlined />}
            text="Cryptocurrencie"
            link="/cryptocurrencies"
            selected={current === "crypto"}
            onClick={() => setCurrent("crypto")}
          />
          <StyledMenuItem
            icon={<MoneyCollectOutlined />}
            text="Exchanges"
            link="/exchanges"
            selected={current === "exchanges"}
            onClick={() => setCurrent("exchanges")}
          />
          <StyledMenuItem
            icon={<BulbOutlined />}
            text="News"
            link="/news"
            selected={current === "news"}
            onClick={() => setCurrent("news")}
          />
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
