import React from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Lottie from "lottie-react";
import { setUserRegisterActionServ } from "../../Redux/actions/actionUser";

export default function RegisterPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    let onSuccess = () => {
      message.success("Register Success");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    };
    let onFail = (reason) => {
      message.error(reason);
    };
    dispatch(setUserRegisterActionServ(values, onSuccess, onFail));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-w-layout mx-auto  flex items-center justify-center pt-40">
      <div className="w-1/2 h-full flex items-center justify-center">
        <Form
          className="bg-white w-full rounded-3xl"
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
          <div className="p-4">
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
              label="Tên"
              name="hoTen"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Số Điện Thoại"
              name="soDt"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Đăng Ký
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
