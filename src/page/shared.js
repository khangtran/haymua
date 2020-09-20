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


class UIText extends React.Component {
  render() {
    return <div>
      <span>{this.props.label}</span>
      <input {...this.props} />
    </div>
  }
}

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
            <div key={index} style={{ width: this.props.colFlex[index] }}>
              <span style={{ margin: 8 }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div style={{ overflow: "auto", height: 500 }}>
          {this.props.data.map((item, index) => (
            <div key={index}
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

export class UIModal extends React.Component {

  state = {
    isVisible: false
  }

  toggle() {
    this.setState({ isVisibleß: !this.state.isVisible })
  }

  render() {
    return <div  >
      <div style={{ height: 40 }} className='row h-a-between a-center'  >

        <span style={{ fontSize: 20 }}>{this.props.title}</span>
        <Button onClick={() => this.toggle()} >X</Button>
      </div>

      <div>
        {this.props.children}

      </div>
    </div>
  }
}