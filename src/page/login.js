import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  TextField
} from "@material-ui/core";


const img_url =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";

export default class LoginPage extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div style={{ backgroundColor: "lightgray", height: "100%" }}>
        <img
          src={null}
          alt="cover"
          style={{
            display: "none",
            width: "100%",
            height: "100%",
            position: "absolute"
          }}
        />

        <Card
          style={{
            marginTop: "5%",
            width: 375,
            alignSelf: "center",
            zIndex: 1,
            backgroundColor: "white"
          }}
        >
          <CardHeader title="Tài khoản" />
          <CardContent>
            <TextField variant="outlined" label="Tên người dùng" size="small" />
            <div style={{ height: 10 }} />
            <TextField
              type="password"
              variant="outlined"
              label="Mật khẩu"
              size="small"
            />
            <div style={{ height: 10 }} />

            <div style={{ marginTop: 20 }}>
              <Button
                style={{ width: "auto" }}
                size="large"
                variant="contained"
                color="primary"
                onClick={() => this.props.history.push("/home")}
              >
                ĐĂNG NHẬP
              </Button>

              <div className="cursor" style={{ padding: 8 }}>
                <span
                  style={{ color: "blue", textAlign: "center", fontSize: 16 }}
                >
                  Quên mật khẩu
                </span>
              </div>

              <Button
                style={{ width: "auto", marginTop: 10, color: "black" }}
                variant="outlined"
                onClick={() => this.props.history.push("/signup")}
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
