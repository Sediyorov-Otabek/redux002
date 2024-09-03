import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const Auth = () => {
  let user = useSelector((state) => state.token);
  return user ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;
