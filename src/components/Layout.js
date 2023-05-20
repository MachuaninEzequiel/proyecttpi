import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import Navbar1 from "./navbar/Navbar1";

const Layout = ({ children }) => {
  const adminContext = useContext(Context);

  useEffect(() => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

    if (isAdmin) adminContext.setIsAdmin(true);
  }, []);

  const username = localStorage.getItem("username");

  return (
    <div>
      {username ? <Navbar1 /> : null}

      {children}
    </div>
  );
};

export default Layout;
