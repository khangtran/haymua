import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  Checkbox
} from "@material-ui/core";

class TextField extends React.Component {
  render() {
    return (
      <div style={{ margin: "5px 0", ...this.props.style }}>
        <span style={{ fontSize: 15, marginBottom: 2, fontWeight: "500" }}>
          {this.props.label}
        </span>
        <input
          ref={c => (this.field = c)}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

class Group extends React.Component {
  render() {
    return (
      <div style={{ margin: "10px 0" }}>
        <span style={{ fontSize: 18 }}>{this.props.title}</span>
        <div style={{ marginTop: 10 }}>{this.props.children}</div>
      </div>
    );
  }
}

export default class RegisterPage extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "lightgray", flex: 1 }}>
        <Card style={{ alignSelf: "center", marginTop: "2%", width: 400 }}>
          <CardHeader title="Đăng ký tài khoản" />
          <CardContent>
            <Group title="Thông tin cá nhân">
              <TextField label="Họ và tên" />
              <TextField label="Email" />
              <TextField label="Số điện thoại" />
            </Group>

            <Group title="Tài khoản đăng nhập">
              <TextField label="Tên đăng nhập" />
              <TextField label="Mật khẩu" />
              <div class="row h-a-center" style={{ marginTop: 8 }}>
                <Checkbox color="primary" />
                <span>
                  Tôi đồng ý với các điều khoản và chính sách của haymua.vn
                </span>
              </div>
            </Group>

            <div>
              <Button
                color="primary"
                variant="contained"
                onClick={() => this.props.history.push("/home")}
              >
                ĐĂNG KÝ
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
