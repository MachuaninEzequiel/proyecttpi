import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import Navbar1 from "./navbar/Navbar1";
import Navbar3 from "./navbar/Navbar3";
import Navbar4 from "./navbar/Navbar4";

const Layout = ({ children }) => {
  const adminContext = useContext(Context);

  useEffect(() => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

    if (isAdmin) adminContext.setIsAdmin(true);
  }, []);

  const username = localStorage.getItem("username");

  return (
    <div>
      {username === "prod" ? <Navbar1 /> : null}
      {username === "ventas" ? <Navbar3 /> : null}
      {username === "test" ? <Navbar4 /> : null}

      {children}
    </div>
  );
};

export default Layout;
