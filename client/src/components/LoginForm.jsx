import React from "react";
import {
  Link,
  //   Form,
  //   redirect,
  //   useNavigation,
  useNavigate,
} from "react-router-dom";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { FormRow, SubmitBtn } from "../utils";
import customFetch from "../utils/customFetch";
const LoginForm = () => {
  const navigate = useNavigate();
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
  const loginUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const data = { email, password };

    try {
      // Send login request to the server
      const response = await customFetch.post("/auth/login", data);

      console.log("Response Data:", response);

      // Assuming response contains `user` and `token` data
      const { user, token } = response.data;

      // Save user and token in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      // Show success toast
      toast.success("Login successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Login failed");
      console.error("Login Error:", error);
    }
  };

  return (
    <>
      <Form method="post" onSubmit={loginUser}>
        <h4>Login</h4>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <button type="submit" className="btn main-btn">
          Login
        </button>
      </Form>
    </>
  );
};

export default LoginForm;
