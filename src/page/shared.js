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

export class UITable extends React.Component {
  render() {
    return (
      <div
        className="box"
        style={{ widht: 400, backgroundColor: "#F8FEFF", minHeight: 500 }}
      >
        <div
          className="row h-a-between"
          style={{
            borderBottom: "1px solid #BBD3D7"
          }}
        >
          {this.props.headers.map((item, index) => (
            <div style={{ width: this.props.colFlex[index] }}>
              <span key={index} style={{ margin: 8 }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div>
          {this.props.data.map((item, index) => (
            <div
              className="item-table cursor "
              style={{ borderBottom: "1px solid #BBD3D7" }}
            >
              <div key={index} className="row h-a-between ">
                {this.props.renderItems(item, index)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
