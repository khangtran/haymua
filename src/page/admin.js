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
import PopEditProduct from "./admin/PopEditProduct";
import Services from "../services/services";

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
  "Sản phẩm",
  "Danh mục",
  "Đơn hàng",
  "Người dùng",
  "Quảng cáo",
  "Báo cáo",
  "Đối tác liên kết"
];

const header_mapping = [
  { key: "id", value: "Mã ID" },
  { key: "providerID", value: "Mã người đăng" },
  { key: "name", value: "Tên sản phẩm" },
  { key: "type", value: "Loại" },
  { key: "intro", value: "Mô tả" },
  { key: "photos", value: "Hình ảnh" },
  { key: "price", value: "Đơn giá" },
  { key: "status", value: "Trạng thái" },
  { key: "isVisible", value: "Hiển thị" }
];
const colFlex = [100, 125, 200, 100, 200, 100, 100, 100, 100];

// https://salt.tikicdn.com/cache/280x280/ts/product/56/99/6b/c146634c481e39b753693a04c4158284.jpg
//https://salt.tikicdn.com/cache/w390/ts/product/65/a8/bb/8676c0e78e1dc75670daf8c89f2cc8d3.png


export class AdminPage extends React.Component {

  state = {
    menuList: [],
    isSeller: false,
    isLoading: true,
    data: [],
  }

  componentDidMount() {

    this.loadData()


    let { isSeller } = this.props.location.state
    if (isSeller) {
      let list = [menuList[0], menuList[2], menuList[5]]
      this.setState({ menuList: list, isSeller: true })
    }
    else
      this.setState({ menuList: menuList })
  }

  async loadData() {
    let result = await Services.get_product()
    if (result.error === 0)
      this.setState({ data: result.data })
  }

  onClick() {

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

        <div className="row" style={{ flex: 1 }}>
          <div style={{ flex: 0.15, borderRight: "1px solid lighgray" }}>
            {this.state.menuList.map((item, index) => (
              <div key={index} className="menu-item cursor" onClick={() => null}>
                <span style={{ margin: 8, fontSize: 17 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div style={{ flex: "0.85", backgroundColor: "#F3F3F3" }}>
            <div style={{ margin: "8px " }}>
              <div className="row h-a-between a-center">
                <Button variant="outlined" onClick={() => this.popEditProduct.toggle()}>Thêm mới</Button>

                <div style={{ width: 300 }}>
                  <input placeholder="Tìm kiếm nhập mã id, tên" />
                </div>
              </div>
            </div>


            <UITable
              colFlex={colFlex}
              headers={header_mapping}
              data={this.state.data}
              renderItems={(item, index) =>
                header_mapping.map((prop, index) => (
                  <div key={index} style={{ width: colFlex[index] }}>
                    <div style={{
                      margin: 8,
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}>
                      {item[`${prop.key}`]}
                    </div>
                  </div>
                ))
              }
              onItemClick={(item, index) => {
                this.popEditProduct.toggle()
                  .setData(item)
                // this.popEditProduct.setData(item)
              }}
            />

            <div style={{ margin: '0 8px' }}>
              <div className='row h-a-between' >

                <div className='row a-center'>
                  <span style={{ marginRight: 5 }}>Hiển thị</span>
                  <input style={{ width: 50 }} defaultValue={20} placeholder='Số dòng được hiển thị' />
                </div>

                <div className='row a-center'>
                  <input defaultValue={1} style={{ width: 50 }} />
                  <span>/10</span>
                </div>

                <div className='row'>
                  <Button>Trước</Button>
                  <Button>Sau</Button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <PopEditProduct ref={c => this.popEditProduct = c} />

      </div>
    );
  }
}
