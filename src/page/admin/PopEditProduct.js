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

export default class PopEditProduct extends React.Component {

    state = {
        data: null,
        statusDes: '',
    }

    data = null

    componentDidMount() {
        console.log('>> mount', this.state.data)
    }

    setData(data) {
        this.data = data
        // this.setData({ data: data })

        console.log('data', data)
        this.fieldID.input.value = data.id
        this.fieldProviderID.input.value = data.providerID
        this.fieldCategoryID.input.value = data.categoyID
        this.fieldName.input.value = data.name
        this.fieldType.input.value = data.type
        this.fieldPrice.input.value = data.price
        this.fieldIntro.input.value = data.intro
        this.fieldPhoto.input.value = data.photo
        this.fieldStatus.input.value = data.status
        this.fieldVisible.input.value = data.isVisible

    }

    toggle() {
        this.modal.toggle()
        return this
    }

    async onDone() {
        let body = {
            categoryID: this.fieldCategoryID.input.value,
            providerID: this.fieldProviderID.input.value,

            name: this.fieldName.input.value,
            photo: [],
            price: this.fieldPrice.input.value,
            intro: this.fieldIntro.input.value,
            status: this.fieldStatus.input.value,
            isVisible: Boolean(this.fieldVisible.input.value),
        }
        let result = await Services.create(body)
        let des = result.error === 0 ? 'Thực thi thành công' : 'Có lỗi'
        this.setData({ statusDes: des })
    }

    render() {
        return <UIModal ref={c => this.modal = c} title='Chỉnh sửa' child={

            <React.Fragment>
                <div className='row h-a-between'>
                    <div>
                        <UIText ref={c => this.fieldID = c} className='form-control' label='Mã ID' disabled={true} />
                        <UIText ref={c => this.fieldProviderID = c} className='form-control' label='ID người đăng' />
                        <UIText ref={c => this.fieldCategoryID = c} className='form-control' label='ID danh mục' />
                    </div>
                    <div style={{ width: 20 }} />
                    <div>
                        <UIText ref={c => this.fieldStatus = c} className='form-control' label='Trạng thái' />
                        <UIText ref={c => this.fieldVisible = c} className='form-control' label='Hiển thị' />
                    </div>

                </div>
                <UIText ref={c => this.fieldName = c} className='form-control' label='Tên sản phẩm' />

                <UIText ref={c => this.fieldType = c} className='form-control' label='Loại' />
                <UIText ref={c => this.fieldPrice = c} className='form-control' label='Đơn giá' />
                <UIText ref={c => this.fieldIntro = c} className='form-control' label='Mô tả' />
                <UIText ref={c => this.fieldPhoto = c} className='form-control' label='Hình ảnh' />

            </React.Fragment>
        } actions={<React.Fragment>
            <Button style={{ width: 100 }} onClick={() => this.onDone()}>OK</Button>
            <Button style={{ width: 100 }} onClick={() => this.toggle()}>Cancel</Button>
        </React.Fragment>} />





    }
}