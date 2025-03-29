import React from "react";
import LoginForm from "../components/LoginForm";
import login from "../assets/images/login.svg";
const Login = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className="login-container">
          <div className="col-sm-6">
            <LoginForm />
          </div>
          <div className="col-sm-6 d-none d-sm-block ">
            <div className="d-flex justify-content-center">
              <img src={login} alt="Arcadia Login photo" className="loginsvg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
