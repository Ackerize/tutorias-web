import React, { useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import AdminRouter from "./routes/AdminRouter";
import AuthRouter from "./routes/AuthRouter";
import UserRouter from "./routes/UserRouter";
import jwt_decode from "jwt-decode";

const MovieApp = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [type, setType] = useState(null);

  useEffect(() => {
      if(token){
          localStorage.setItem('token', token);
          const { userType } = jwt_decode(token);
          setType(userType);  
      }else {
          setType(null);
      }
  }, [token])

  return (
    <HashRouter>
      {type === "admin" && <AdminRouter setToken={setToken} type={type} />}
      {type === "user" && <UserRouter setToken={setToken} type={type} />}
      {!token && <AuthRouter setToken={setToken} />}
    </HashRouter>
  );
};

export default MovieApp;
