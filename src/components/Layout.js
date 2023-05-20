import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import Navbar1 from "./navbar/Navbar1";

const Layout = ({ children }) => {
  const adminContext = useContext(Context);

  useEffect(() => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

    if (isAdmin) adminContext.setIsAdmin(true);
  }, []);

  return (
    <div>
      <Navbar1 />
      {children}
    </div>
  );
};

export default Layout;
