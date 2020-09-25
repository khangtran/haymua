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


export class UIText extends React.Component {

  render() {
    return <div className={this.props.className} >
      <span style={{ color: 'gray', marginBottom: 2 }}>{this.props.label}</span>
      <input ref={c => this.input = c} disabled={this.props.disabled} />
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

          {
            this.props.data === [] &&
            <div>
              <span>Không có dữ liệu</span>
            </div>
            ||
            this.props.data.map((item, index) => (
              <div key={index}
                className="item-table cursor "
                style={{ borderBottom: "1px solid #BBD3D7" }}
                onClick={() => this.props.onItemClick && this.props.onItemClick(item, index)}
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
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    return <div className='modal box' style={{ width: 500, display: this.state.isVisible ? 'flex' : 'none' }} >
      <div className='modal-title' style={{ justifyContent: "center" }}>
        <div className='row h-a-between a-center' style={{ margin: '0 12px' }} >

          <span style={{ fontSize: 20 }}>{this.props.title}</span>
          <Button onClick={() => this.toggle()} >X</Button>
        </div>
      </div>


      <div className='modal-content' >
        {this.props.child}
      </div>

      <div className='modal-action'>
        {this.props.actions}
      </div>
    </div>
  }
}