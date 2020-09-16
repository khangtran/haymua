import React from "react";

import { Rating } from "@material-ui/lab";
import { Button } from "@material-ui/core";

import { Database } from "../services/db";

import CartInstance from "./cart";

const icon_back =
  "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMTYuNDU4MzMsOS42MzAyMWwtNjQuNSw3MS42NjY2N2wtNC4yNTUyMSw0LjcwMzEzbDQuMjU1MjEsNC43MDMxM2w2NC41LDcxLjY2NjY3bDEwLjc1LC05LjQwNjI1bC02MC4yNDQ3OSwtNjYuOTYzNTRsNjAuMjQ0NzksLTY2Ljk2MzU0eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+";

class ProviderPanel extends React.Component {
  state = {
    data: null,
    trust: 0
  };

  render() {
    return (
      <div style={{ margin: 10 }}>
        <span style={{ fontWeight: "bold" }}>Cung cấp bởi </span>
        <span>{this.props.data.name}</span>

        <span style={{ fontWeight: "bold" }}>Độ tin cậy</span>
        <Rating
          name="simple-controlled"
          value={this.props.data.trustStar}
          readOnly
        />

        <div style={{ height: 20 }} />

        <span style={{ fontWeight: "bold" }}>SĐT</span>
        <span>{this.props.data.numphone}</span>

        <span style={{ fontWeight: "bold" }}>Địa chỉ</span>
        <span>{this.props.data.address || "không có"}</span>
      </div>
    );
  }
}

export default class DetailPage extends React.Component {
  state = {
    isLoading: true,
    data: null,
    data_provider: null,

    cart: 0
  };

  componentDidMount() {
    let search = this.props.location.search;
    let params = new URLSearchParams(search);
    let id = params.get("id");

    let data = Database.product.find(item => item.productID === id);
    let provider = Database.provider.find(item => item.id === data.providerID);

    setTimeout(() => {
      this.setState({ data: data, isLoading: false, data_provider: provider });
    }, 1500);

    CartInstance.onNotify = () => {
      let cart = this.state.cart;
      this.setState({ cart: CartInstance.list.length });
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: "rgb(223,223,223)" }}>
        <div
          style={{
            backgroundColor: "deepskyblue",
            color: "white"
          }}
        >
          <div
            style={{
              height: 50,
              margin: " 0 15px"
            }}
            className="row h-a-between a-center"
          >
            <img
              className="cursor"
              src={icon_back}
              style={{ width: 30, height: 30 }}
              onClick={() => this.props.history.goBack()}
            />

            <span style={{ fontSize: 20 }}>Chi tiết sản phẩm</span>

            <Button variant="outlined" style={{ color: "white" }}>
              Giỏ hàng ({this.state.cart})
            </Button>
          </div>
        </div>

        <div style={{ margin: 20 }}>
          {(this.state.isLoading && (
            <div style={{ alignSelf: "center" }}>
              <span style={{ fontSize: 16 }}>Đang tải dữ liệu</span>
            </div>
          )) || (
            <div className="row">
              <div style={{ flex: 0.9, backgroundColor: "white" }}>
                <div className="row">
                  <div style={{ width: "70%" }}>
                    <img
                      style={{ padding: 60, width: 400, alignSelf: "center" }}
                      src={this.state.data.photo[0]}
                      alt="thumb"
                    />
                  </div>
                  <div style={{ margin: "40px 20px", flex: 1 }}>
                    <span style={{ fontSize: 16 }}>{this.state.data.name}</span>
                    <span style={{ fontSize: 22 }}>
                      {this.state.data.price.toLocaleString()} vnd
                    </span>

                    <div style={{ height: 10 }} />

                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => CartInstance.add(this.state.data)}
                    >
                      Mua
                    </Button>
                  </div>
                </div>

                <div style={{ margin: "20px" }}>
                  <div>
                    <span>Mô tả sản phẩm</span>

                    <span>Nội dung</span>
                  </div>

                  <div>
                    <span>Thông tin chi tiết</span>

                    <span>Nội dung</span>
                  </div>
                </div>
              </div>

              <ProviderPanel data={this.state.data_provider} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
