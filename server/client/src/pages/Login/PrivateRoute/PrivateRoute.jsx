import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.token);

  const userLogin = useSelector((state) => state?.userLogin);
  const { loading } = userLogin;

  let location = useLocation();
  if (loading) {
    return <Loading />;
  }

  if (!token) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default PrivateRoute;
