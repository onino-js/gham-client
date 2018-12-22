import * as React from "react";
import { inject, observer } from "mobx-react";
import { Form, Icon, Input, Button } from "antd";
import styled from "styled-components";
import logo from "./../image/gham-logo.png";
import { AuthStore } from "../stores/auth.store";
import { UiStore } from "../stores/ui.store";

interface Props {
  uiStore?: UiStore;
  authStore?: AuthStore;
  form: any;
}

interface IForm {
  email: string;
  password: string;
}
const FormItem = Form.Item;

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Img = styled.img`
  width: 200px;
  padding-bottom: 30px;
`;

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  authStore: allStores.authStore,
}))
@observer
class Login extends React.Component<Props> {
  private handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: IForm) => {
      this.props.authStore!.setIsLogged(true);
      if (!err) {
        console.log("Received values of form: ", values);
      } else {
        console.log("Error: ", values);
      }
    });
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Container>
        <Img src={logo} alt="GHAM" />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" },
              ],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />,
            )}
          </FormItem>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form>
      </Container>
    );
  }
}

const LoginWithForm = Form.create()(Login);

export default LoginWithForm;
