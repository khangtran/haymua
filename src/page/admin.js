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

import { UITab, UITable } from "./shared";
import PopEditProduct from "./admin/PopEditProduct";
import Services from "../services/services";
import { DashboardChild } from "./admin/adminChild/dashboardChild";
import ProductChild from "./admin/adminChild/productChild";

export class AdminLoginPage extends React.Component {

  componentDidMount() {

  }

  onLogin() {
    let path = this.props.location.pathname
    if (path === '/login') {
      this.props.history.push("/home")
    } else if (path === '/admin/login') {
      this.props.history.push("/admin", { isSeller: false })
    }
    else {
      this.props.history.push("/seller", { isSeller: true })
    }
  }


  render() {
    return (
      <div style={{ backgroundColor: "lightgray", height: "100%" }}>
        <div style={{ position: "absolute", top: "30%", left: "12%" }}>
          <span style={{ fontSize: 40 }}>Haymua</span>
          <span style={{ fontSize: 25 }}>Quản trị nội dung</span>
          <span style={{ fontSize: 16, color: "gray" }}>
            Trang dành cho quản trị viên và các đối tác kinh doanh.
          </span>
        </div>

        <Card
          style={{
            position: "absolute",
            top: "20%",
            right: "12%",
            width: 375,
            alignSelf: "center",
            zIndex: 1,
            backgroundColor: "white"
          }}
        >
          <CardHeader title="BẢO MẬT" />
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
                onClick={() => this.onLogin()}
              >
                ĐĂNG NHẬP
              </Button>

            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const menuList = [
  { header: 'Tổng quan', component: <DashboardChild /> },

  { header: "Sản phẩm", component: <ProductChild /> },
  { header: "Danh mục", component: null },
  { header: "Đơn hàng", component: null },

  { header: "Trang chủ", component: null },

  { header: "Quảng cáo", component: null },
  { header: "Báo cáo", component: null },

  { header: "Đối tác liên kết", component: null },

];

// https://salt.tikicdn.com/cache/280x280/ts/product/56/99/6b/c146634c481e39b753693a04c4158284.jpg
// https://salt.tikicdn.com/cache/w390/ts/product/65/a8/bb/8676c0e78e1dc75670daf8c89f2cc8d3.png


export class AdminPage extends React.Component {

  state = {
    menuList: [],
    isSeller: false,
    isLoading: true,
    data: [],
  }

  componentDidMount() {

    console.log('>> seller', this.props.location)
    if (this.props.location.state === undefined) {
      this.setState({ menuList: menuList })
      return
    }

    let isSeller = this.props.location.state.isSeller
    if (isSeller) {
      let list = [menuList[0], menuList[1], menuList[2], menuList[6], menuList[7]]
      this.setState({ menuList: list, isSeller: true })
    }

    //this.loadData()

  }

  render() {
    return (
      <div style={{ flex: 1, overflow: "hidden" }}>
        <div
          className="row h-a-between a-center"
          style={{ height: 40, backgroundColor: "black", color: "white" }}
        >
          <span style={{ fontSize: 20, marginLeft: 8 }}>Haymua.vn</span>

          <span style={{ fontSize: 20, marginLeft: 8 }}>{this.state.isSeller ? 'Quản lý cửa hàng' : 'Quản trị nội dung'}</span>

          <span className='cursor' style={{ fontSize: 16, marginRight: 8 }} onClick={() => this.props.history.goBack()}>Đăng xuất</span>
        </div>

        <UITab tabs={menuList} />

      </div>
    );
  }
}
