import React from "react";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions
} from "@material-ui/core";

import CartInstance from "./cart";

const data = [
  {
    name: "Sony Smart-TV 65 inch",
    price: 65000000,
    thumb: ""
  },
  {
    name: "Iphone 6s 32gb",
    price: 7500000,
    thumb: ""
  }
];

class PaymentItem extends React.Component {
  render() {
    return (
      <div className="row" style={{ height: "auto" }}>
        <span style={{ fontSize: 16, margin: "0 20px" }}>
          {this.props.name}
        </span>
        <span style={{ color: "red", fontWeight: "bold" }}>
          {this.props.price.toLocaleString()} vnd
        </span>
      </div>
    );
  }
}

export default class PaymentPage extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.setState({ list: data });

    console.log(">> data cart", CartInstance.list);
  }

  render() {
    return (
      <div>
        <div class="row">
          <div>
            <span>Phương thức thanh toán</span>
            <div>
              <input type="radio" />
              <span> Thanh toán online</span>

              <input type="radio" />
              <span> Sau khi nhận hàng</span>
            </div>
          </div>

          <Card>
            <CardHeader>Đơn hàng</CardHeader>
            <CardContent>
              {CartInstance.list.map((item, index) => (
                <PaymentItem
                  key={index}
                  thumb={item.photo[0]}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
