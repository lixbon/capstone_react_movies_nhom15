import React from "react";
import { Button, Form, Input, message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Lottie from "lottie-react";
import bg_animate from "../../assets/bg_login.json";
import { setUserLoginActionServ } from "../../Redux/actions/actionUser";

export default function LoginPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    let onSuccess = () => {
      message.success("Login Success");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    };
    let onFail = (reason) => {
      message.error(reason);
    };
    dispatch(setUserLoginActionServ(values, onSuccess, onFail));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container mx-auto flex items-center justify-center p-10">
      <div className="w-1/2 h-full">
        <Lottie animationData={bg_animate} />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <Form
          className="bg-white w-full"
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tài Khoản"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật Khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <h3>
            Nếu bạnh chưa có tài khoản, vui lòng{" "}
            <NavLink to="/register">
              <span>Đăng ký</span>
            </NavLink>
          </h3>
        </Form>
      </div>
    </div>
  );
}
