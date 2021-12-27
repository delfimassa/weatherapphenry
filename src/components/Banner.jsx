import React from "react";
import SearchBar from "./SearchBar";
import { GiSundial } from "react-icons/gi";
import styles from "../styles/Banner.module.css";
import { NavLink } from "react-router-dom";

const Banner = ({ onSearch}) => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <NavLink to="/about" className="links">
          <h1 className="display-4 titulo">
            Weather app
            <GiSundial />
          </h1>
          <p className="lead">by Delfi Massa</p>
        </NavLink>
        <SearchBar onSearch={onSearch}></SearchBar>
      </div>
    </div>
  );
};

export default Banner;
