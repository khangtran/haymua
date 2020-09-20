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

export default class PopEditProduct extends React.Component {
    render() {
        return <UIModal title='Chỉnh sửa' >
            <UIText label='Tên sản phẩm' />
            <UIText label='Loại' />
            <UIText label='Người đăng' />
            <UIText label='Đơn giá' />
            <UIText label='Mô tả' />
            <UIText label='Hình ảnh' />
            <UIText label='Trạng thái' />
            <UIText label='Hiển thị' />

            <div className='row'>
                <Button>Lưu</Button>
                <Button>Không lưu</Button>
            </div>

        </UIModal>
    }
}