import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddUser");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);
  return (
    <div className={styles.header}>
      <p className={styles.logo}>User Management</p>
      <div className={styles["header-right"]}>
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? styles.active : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddUser" ? styles.active : ""}`}
            onClick={() => setActiveTab("AddUser")}
          >
            Add User
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${activeTab === "About" ? styles.active : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
