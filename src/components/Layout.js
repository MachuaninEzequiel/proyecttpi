import React, { Children } from "react";
import Navbar1 from "./navbar/Navbar1";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar1 />
      {children}
    </div>
  );
};

export default Layout;
