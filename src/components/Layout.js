import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar/>
      { children }
      <footer>
        <p>Copyright 2022 Jon Dev.</p>
      </footer>
    </div>
  )
}

export default Layout