import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CartInstance from "./cart";
import { Database } from "../services/db";
import Services from "../services/services";

const url_img_slide = [
  "https://salt.tikicdn.com/cache/w876/ts/banner/87/47/95/a7b8d79381c63f0260981967f2dd4f90.png",
  "https://salt.tikicdn.com/cache/w876/ts/banner/22/cd/f7/09d53f5ca2d3cc36dab1191c44a9dfb5.png",
  "https://salt.tikicdn.com/cache/w876/ts/banner/82/24/6d/13834ae7bd36b41ce8ce17e7666f98e9.jpg"
];

export class ItemProduct extends React.Component {
  render() {
    return (
      <div
        className="item-product cursor"
        style={{ width: 260 }}
        onClick={this.props.onClick}
      >

        <div style={{ margin: 0 }}>
          <img style={{ height: 275, margin: 20 }} src={this.props.img} />
          <div style={{ margin: "8px 20px" }}>
            <span style={{ textAlign: "end", fontSize: 16 }}>
              {this.props.name}
            </span>
            <span style={{ textAlign: "end", fontSize: 20 }}>
              {this.props.price} vnd
            </span>
          </div>
        </div>
        <Button
          style={{ margin: "8px" }}
          variant="contained"
          color="secondary"
          onClick={this.props.onBtnAddCart}
        >
          Thêm vào giỏ hàng
        </Button>
      </div>
    );
  }
}

export class ItemHome extends React.Component {
  render() {
    var { section, items } = this.props.data;

    return (
      <div style={{ marginTop: 20 }}>
        <div style={{}}>
          <span
            style={{
              fontSize: 22,
              margin: "8px 8px 8px 0px",
              fontWeight: "500"
            }}
          >
            {section}
          </span>
        </div>

        <div className="row" style={{ backgroundColor: "white" }}>
          {items.map((item, index) => (
            <ItemProduct
              key={index}
              name={items[index].name}
              img={items[index].photo[0]}
              price={items[index].price.toLocaleString()}
              onClick={() =>
                this.props.history.push(`/detail?id=${item.productID}`)
              }
              onBtnAddCart={() => CartInstance.add(item)}
            />
          ))}
        </div>
      </div>
    );
  }
}

class BannerHome extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#5BBD2B" }}>
        <div
          className="row"
          style={{ margin: 8, color: "white", justifyContent: "flex-end" }}
        >
          <span className="cursor" onClick={this.props.onClick}>
            Bán hàng cùng chúng tôi
          </span>
        </div>
      </div>
    );
  }
}

class HeaderHome extends React.Component {
  state = {
    cartCount: 0
  };

  componentDidMount() {
    CartInstance.onNotify = () => {
      this.setState({ cartCount: CartInstance.list.lenght });
      console.log(">> cart count", this.state.cartCount);
    };
  }

  onLogin() {
    let isAuthen = this.props.isAuthen

    if (!isAuthen) this.props.history.push('/login')
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.history.push(`timkiem?q=${this.input_search.value}`)
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: "deepskyblue" }}>
        <div
          className="row h-a-between a-center"
          style={{ margin: "8px 20px" }}
        >
          <div style={{ width: 45, height: 45, border: "1px solid green" }}>
            Logo
          </div>

          <input ref={c => this.input_search = c}
            style={{ borderRadius: 2, fontSize: 14, width: "55%" }}
            placeholder="Tìm kiếm sản phẩm"
            onKeyDown={e => this.onKeyDown(e)}
          />

          <Button
            variant="outlined"
            style={{ color: "white" }}
            onClick={() => this.props.history.push("/cart")}
          >
            Giỏ hàng {this.state.cartCount}
          </Button>

          <Button variant="outlined" style={{ color: "white" }} onClick={() => this.onLogin()} >
            Đăng nhập
          </Button>
        </div>
      </div>
    );
  }
}

export default class HomePage extends React.Component {

  state = {
    data: [],
    isLoading: true
  }

  componentDidMount() {
    this.loadData()
  }

  async loadData() {

    let result = await Services.get_product()
    if (result.error === 0)
      this.setState({ data: result.data, isLoading: false })

    console.log('>> load data', this.state.data)
  }

  render() {
    return (
      <div style={{ backgroundColor: "rgb(239, 239, 239)" }}>
        <BannerHome onClick={() => this.props.history.push('/seller-login')} />
        <HeaderHome history={this.props.history} />

        <div style={{ margin: "20px 30px 20px 30px" }}>
          <div
            className="row h-a-center"
            style={{
              height: 450,
              borderRadius: 5,
              border: "1px solid rgb(225, 225, 225)",
              backgroundColor: "white"
            }}
          >
            <div style={{ width: "20%" }}>
              {Database.category.map((item, index) => (
                <div className="menu-item cursor" key={`dm${index}`}>
                  <span style={{ fontSize: 16, margin: 8 }}>{item.name}</span>
                </div>
              ))}
            </div>

            <div style={{ width: "80%" }}>
              <Carousel autoPlay showArrows={false} renderThumbs={() => null}>
                {url_img_slide.map((item, index) => (
                  <div key={index}>
                    <img style={{ height: 450 }} src={url_img_slide[index]} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          {
            this.state.isLoading &&
            <div style={{ backgroundColor: 'lightgray' }} >
              <span style={{ margin: 10, }}>Đang tải dữ liệu</span>
            </div>
            ||
            <div style={{ margin: "10px 0" }}>
              {Database.homepage.map((item, index) => (
                <ItemHome key={index} data={item} history={this.props.history} />
              ))}
            </div>
          }
        </div>

        <div
          style={{ backgroundColor: "black", color: "white", lineSpace: "1.2" }}
        >
          <div style={{ margin: "40px 20px", fontSize: 14 }}>
            <div className="row h-a-between">
              <div>
                <span style={{ fontSize: 16 }}>VỀ HAYMUA</span>
                <div style={{ marginTop: 10 }}>
                  <span>Giới thiệu</span>
                  <span>Chính sách bảo mật thông tin</span>
                  <span>Điều khoản sử dụng</span>
                </div>
              </div>

              <div>
                <span style={{ fontSize: 16 }}>HỖ TRỢ KHÁCH HÀNG</span>
                <div style={{ marginTop: 10 }}>
                  <span>Email hỗ trợ: hotro276@haymua.com</span>
                  <span>Email góp ý: gopy276@haymua.com</span>
                  <span>Hotline: +08 0000 9099</span>
                </div>
              </div>

              <div>
                <span style={{ fontSize: 16 }}>PHƯƠNG THỨC THANH TOÁN</span>
                <div style={{ marginTop: 10 }}>
                  <span>Thanh toán trực tuyến</span>
                  <span>Thanh toán sau khi nhận hàng</span>
                  <span>Thu hộ</span>
                </div>
              </div>

              <div>
                <span style={{ fontSize: 16 }}>HỢP TÁC VÀ LIÊN KẾT</span>
                <div style={{ marginTop: 10 }}>
                  <span>Bán hàng cùng chúng tôi</span>
                  <span>Qui định và chính sách sàn GD</span>
                </div>
              </div>
            </div>

            <div style={{ alignSelf: "center", marginTop: 40 }}>
              <span style={{ fontSize: 16 }}>ĐỊA CHỈ VĂN PHÒNG</span>
              <div style={{ marginTop: 10 }}>
                <span>P.Hiệp Thành, Q.12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
