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

import { UITable } from "./shared";

export class AdminLoginPage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div style={{ backgroundColor: "lightgray", height: "100%" }}>
        <div style={{ position: "absolute", top: "35%", left: "12%" }}>
          <span style={{ fontSize: 40 }}>Haymua</span>
          <span style={{ fontSize: 25 }}>Quản trị nội dung</span>
          <span style={{ fontSize: 16, color: "gray" }}>
            Trang dành cho quản trị viên và đối tác liên kết.
          </span>
        </div>

        <Card
          style={{
            position: "absolute",
            top: "35%",
            right: "12%",
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

const menuList = [
  "Báo cáo",
  "Đơn hàng",
  "Danh mục",
  "Sản phẩm",
  "Người dùng",
  "Quảng cáo",
  "Đối tác liên kết"
];

const header_mapping = [
  { key: "id", value: "Mã ID" },
  {
    key: "providerID",
    value: "Mã người đăng"
  },
  {
    key: "name",
    value: "Tên sản phẩm"
  },
  {
    key: "type",
    value: "Loại"
  },
  {
    key: "intro",
    value: "Mô tả"
  },
  {
    key: "photos",
    value: "Hình ảnh"
  },
  {
    key: "price",
    value: "Đơn giá"
  }
];

const data_test = [
  {
    id: "1230123",
    name: "Smart Tivi Sony 50inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    type: "chiếc",
    providerID: "432934"
  },
  {
    id: "12302323",
    name: "Smart Tivi Sony 40inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    type: "chiếc",
    providerID: "432934"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  },
  {
    id: "1230123",
    name: "Tivi Sony 32inch",
    photos: ["https://"],
    price: 40000000,
    intro: "",
    providerID: "432934",
    type: "chiếc"
  }
];

const colFlex = [100, 125, 300, 100, 200, 100, 100];

export class AdminPage extends React.Component {
  render() {
    return (
      <div style={{ flex: 1, overflow: "hidden" }}>
        <div
          className="row h-a-between a-center"
          style={{ height: 40, backgroundColor: "black", color: "white" }}
        >
          <span style={{ fontSize: 20, marginLeft: 8 }}>Haymua.vn</span>

          <span style={{ fontSize: 20, marginLeft: 8 }}>Quản trị nội dung</span>

          <span style={{ fontSize: 16, marginRight: 8 }}>Đăng xuất</span>
        </div>

        <div className="row" style={{ flex: 1 }}>
          <div style={{ flex: 0.15, borderRight: "1px solid lighgray" }}>
            {menuList.map((item, index) => (
              <div className="menu-item">
                <span key={index} style={{ margin: 8, fontSize: 17 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div style={{ flex: "0.85", backgroundColor: "#DAE0E1" }}>
            <div style={{ margin: "8px " }}>
              <div className="row h-a-between a-center">
                <Button variant="outlined">Thêm mới</Button>

                <div style={{ width: 300 }}>
                  <span>Tìm kiếm</span>
                  <input placeholder="Mã id, tên" />
                </div>
              </div>
            </div>

            <UITable
              colFlex={colFlex}
              headers={header_mapping}
              data={data_test}
              renderItems={(item, index) =>
                header_mapping.map((prop, index) => (
                  <div style={{ width: colFlex[index] }}>
                    <span key={index} style={{ margin: 8 }}>
                      {item[`${prop.key}`]}
                    </span>
                  </div>
                ))
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
