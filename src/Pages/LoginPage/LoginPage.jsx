import React from "react";
import { Button, Form, Input, message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Lottie from "lottie-react";
import { setUserLoginActionServ } from "../../Redux/actions/actionUser";

export default function LoginPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    let onSuccess = () => {
      message.success("Đăng Nhập Thành Công");
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
    <div className="max-w-layout mx-auto min-h-[75vh] flex items-center justify-center">
      <div className="w-1/2 h-full flex items-center justify-center">
        <Form
          className="bg-white w-full rounded-xl"
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
          <div className=" p-4">
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
                span: 24,
              }}
            >
              <div
                className="space-y-4 py-4
              "
              >
                <div className="justify-center items-center flex">
                  <Button type="primary" htmlType="submit">
                    Đăng Nhập
                  </Button>
                </div>

                <h3 className="text-center">
                  Nếu bạnh chưa có tài khoản, vui lòng{" "}
                  <NavLink to="/register">
                    <span>Đăng ký</span>
                  </NavLink>
                </h3>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
