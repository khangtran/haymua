import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import CartInstance from "./cart";
import { Database } from "../services/db";
import Services from "../services/services";

const data = [{ id: '123', name: 'Sony tivi 32 inch', price: 8800000 },
{ id: '213', name: 'Thức ăn cho mèo', price: 55000 },
{ id: '23432', name: 'Sony tivi 50 inch', price: 22000000 }]

export default class SearchPage extends React.Component {

    componentDidMount() {

        let path = this.props.location.pathname
        let search = new URLSearchParams(path)
        let query = search.get('q')
        console.log('> q', query)

        this.field.value = query
    }

    render() {
        return <div>
            <div style={{ backgroundColor: 'deepskyblue' }} >
                <div className='row h-a-between a-center' style={{ margin: '8px' }} >

                    <div className='row' style={{ width: '70%' }} >
                        <Button style={{ color: 'white' }} variant='outlined'>Quay lại</Button>

                        <input ref={c => this.field = c} style={{ width: '50%', margin: '0 50px' }} placeholder='Tìm kiếm' />

                    </div>

                    <div>
                        <span style={{ color: 'white' }}>sắp xếp</span>
                    </div>
                </div>
            </div>

            <div style={{ margin: 20 }}>
                <span>Kết quả tìm kiếm</span>

                <div>
                    {
                        data.map((item, index) =>
                            <div className='box' key={index} style={{ marginBottom: 12 }} >

                                <div className='cursor' style={{ margin: 8 }}>

                                    <div className='row'>
                                        <img src='' style={{ width: 120, height: 120 }} />

                                        <div className='' style={{ marginLeft: 8 }} onClick={() => this.props.history.push('/detail', { id: item.id })} >

                                            <span style={{ fontSize: 16 }} >{item.name}</span>
                                            <span style={{ fontSize: 22 }} >{item.price.toLocaleString()} vnd</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    }
}