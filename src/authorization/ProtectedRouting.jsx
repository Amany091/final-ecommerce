import React from "react";
import { Navigate } from "react-router-dom";
import { useGetUserQuery } from "../redux/RTK/loginApi";
import { ToastError } from "../components/ui/Toast";

const ProtectedRouting = ({ children , role= "user"}) => {
  const { data: user } = useGetUserQuery();
  if (user?.role === role) {
    return children;
  } else {
    ToastError("You don't have permission to access this page")
    // return <Navigate to="/login" replace={true} />;
  }
};

export default ProtectedRouting

