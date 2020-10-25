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


export class UITab extends React.Component {

  state = {
    tabIndex: 0
  }

  onIndexChange(index) {
    this.setState({ tabIndex: index })
  }

  render() {
    return <div style={{ flex: 1 }}>
      <div className="row" style={{ flex: 1 }}>
        <div style={{ flex: 0.175, borderRight: "1px solid lighgray" }}>
          <UIGroupToggle items={this.props.tabs} onIndexChange={index => this.onIndexChange(index)} />

        </div>

        <div style={{ flex: "0.85", backgroundColor: "#F3F3F3" }}>

          {
            this.props.tabs[this.state.tabIndex].component
          }

        </div>
      </div>

    </div>
  }
}

export class UIButtonToggle extends React.PureComponent {

  backgroundColor = 'rgb(0, 102, 255)'

  state = {
    isToggle: false
  }

  toggle() {
    this.setState({ isToggle: !this.state.isToggle })
  }

  onClick() {
    this.props.onClick && this.props.onClick()
    this.toggle()
  }

  render() {

    let { isToggle } = this.state
    let css_toggle = { backgroundColor: this.backgroundColor, color: 'white' }
    let css = { backgroundColor: 'transparent', color: 'black' }
    let background = isToggle ? css_toggle : css

    console.log('>> ontoggle', background)

    return <div className={this.props.className} style={{ fontSize: 16, ...background }} onClick={() => this.onClick()}>

      <span style={{ margin: '12px 8px' }} > {this.props.title}</span>
    </div>
  }
}

export class UIGroupToggle extends React.PureComponent {

  lastToggle = 0

  componentDidMount() {
    let defaultIndex = this.props.defaultIndex || 0
    this[`ui-toggle-${defaultIndex}`].toggle()
  }

  onIndexChange(index) {
    if (this.lastToggle === index) return

    this[`ui-toggle-${this.lastToggle}`].toggle()
    this.lastToggle = index

    this.props.onIndexChange && this.props.onIndexChange(index)
  }

  render() {
    return <React.Fragment>
      {this.props.items.map((item, index) => (
        <UIButtonToggle ref={c => this[`ui-toggle-${index}`] = c} className='menu-item cursor' key={index} title={item.header} onClick={() => this.onIndexChange(index)} />
      ))}
    </React.Fragment>
  }
}