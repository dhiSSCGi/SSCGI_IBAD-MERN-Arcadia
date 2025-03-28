import React from "react";
import LoginForm from "../components/LoginForm";
import login from "../assets/images/login.svg";
const Login = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className="hero row">
          <div className="col-sm-7">
            <LoginForm />
          </div>
          <div className="col-sm-5 d-none d-sm-block">
            <img src={login} alt="Arcadia Login photo" className="loginsvg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
