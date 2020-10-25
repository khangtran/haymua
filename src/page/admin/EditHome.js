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

import { UIModal, UIText } from "../shared";
import Services from "../../services/services";

class SectionHomeItem extends React.Component {
    render() {
        return <div>
            <div>
                <span>
                    {this.props.section}
                </span>
            </div>

            <div>

                {
                    this.props.list.map((item, index) => {
                        <div key={index} >
                            <img src={item.img} />
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                            <span>{item.des}</span>
                        </div>
                    })
                }
            </div>

        </div>
    }
}

export default class EditHome extends React.Component {
    state = {
        data: [],
        isLoading: false
    }

    componentDidMount() {

    }

    loadData() {

    }

    render() {
        return <div>

            <div>
                <span>Tùy chỉnh hiển thị trang chủ</span>
            </div>

            <div style={{ height: 500 }} >

                {this.state.data.map((item, index) => <SectionHomeItem key={index} section={item.section} list={item.list} />)}

            </div>

        </div>
    }
}