import React from "react";
import {
  Link,
  //   Form,
  //   redirect,
  //   useNavigation,
  //   useNavigate,
} from "react-router-dom";
import Form from "react-bootstrap/Form";

import { FormRow, SubmitBtn } from "../utils";
const LoginForm = () => {
  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "secret123",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("take a test drive");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <Form method="post" className="form">
      {/* <Logo /> */}
      <h4>Login</h4>
      {/* {errors && <p style={{ color: "red" }}>{errors.msg}</p>} */}
      <FormRow type="email" name="email" />
      <FormRow type="password" name="password" />
      {/* <SubmitBtn formBtn /> */}
      <p>
        Not a member yet?
        <Link to="/register" className="member-btn">
          Register
        </Link>
      </p>

      <button type="button" className="btn btn-block" onClick={loginDemoUser}>
        explore the app
      </button>
    </Form>
  );
};

export default LoginForm;
