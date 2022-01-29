import React from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import "./login.css";
/**
 * @author
 * @function Login
 **/

export const LoginPage = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    window.location.href = "/dashboard";
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card
      className="login-container"
      size="small"
      title="Login"
      extra={<a href="#">Resigter</a>}
      style={{ width: 600 }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
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
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            //custom validation
            {
              validator: (_, value) => {
                let check = false;
                let message = "";
                if (value && value.length > 3) {
                  check = true;
                } else {
                  message = "Password must have more than 3 characters!";
                }
                return check ? Promise.resolve() : Promise.reject();
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
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
      </Form>
    </Card>
  );
};
