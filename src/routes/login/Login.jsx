import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "../../api/index";
import Registr from "../../components/regestr/Registr";
import logo from "../../assets/Header-removebg-preview.png";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigete = useNavigate();

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    setLoading(true);
    axios
      .post("/admins/sign-in", values)
      .then((res) => {
        navigete("/");
        messageApi.success("Log in!");
        dispatch({ type: "LOGIN", payload: res.data.payload.token });
        console.log(res);
      })
      .catch((err) => {
        messageApi.error("username or password in incorrect!");
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex h-screen items-center gap-6 justify-center">
      <div>
        <img src={logo} alt="" />
      </div>
      {contextHolder}
      <div className=" w-[400px] bg-orange-200 p-5">
        <h3 className="text-center text-3xl mb-3">Login</h3>
        <Form
          className=""
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={handleLogin}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please Add your name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please add your password",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              disabled={loading}
              className="w-full"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>

          <button
            className="w-full items-center justify-center bg-blue-600 p-2 rounded-lg hover:text-white"
            onClick={() => setShow(true)}
          >
            {" "}
            Register
          </button>
        </Form>
      </div>
      <Registr show={show} setShow={setShow} />
    </div>
  );
};
export default Login;
