import React from 'react'
import { UITable } from '../../shared'
import { Button, Snackbar } from '@material-ui/core';
import Services from '../../../services/services';
import PopEditProduct from '../PopEditProduct';


const header_mapping = [
    { key: "id", value: "Mã ID" },
    { key: "providerID", value: "Mã người đăng" },
    { key: "name", value: "Tên sản phẩm" },
    { key: "type", value: "Loại" },
    { key: "intro", value: "Mô tả" },
    { key: "photos", value: "Hình ảnh" },
    { key: "price", value: "Đơn giá" },
    { key: "status", value: "Trạng thái" },
    { key: "isVisible", value: "Hiển thị" }
];

const colFlex = [100, 125, 200, 100, 200, 100, 100, 100, 100];


export default class ProductChild extends React.Component {

    state = {
        data: [],
        snackOpen: false
    }

    componentDidMount() {
        this.loadData()
    }

    async loadData() {
        try {
            let result = await Services.get_product()
            if (result.error === 0)
                this.setState({ data: result.data })
            else this.setState({ snackOpen: true })

        } catch (e) {
            console.log('>> error', e)

        }

    }

    onSnackClose() {

    }

    render() {
        return <div>

            <div style={{ margin: "8px " }}>
                <div className="row h-a-between a-center">
                    <Button variant="outlined" onClick={() => this.popEditProduct.toggle()}>Thêm mới</Button>

                    <div style={{ width: 300 }}>
                        <input placeholder="Tìm kiếm nhập mã id, tên" />
                    </div>
                </div>
            </div>

            <UITable
                colFlex={colFlex}
                headers={header_mapping}
                data={this.state.data}
                renderItems={(item, index) =>
                    header_mapping.map((prop, index) => (
                        <div key={index} style={{ width: colFlex[index] }}>
                            <div style={{
                                margin: 8,
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                            }}>
                                {item[`${prop.key}`]}
                            </div>
                        </div>
                    ))
                }
                onItemClick={(item, index) => {
                    this.popEditProduct.toggle()
                        .setData(item)
                    // this.popEditProduct.setData(item)
                }}
            />

            <div style={{ margin: '0 8px' }}>
                <div className='row h-a-between' >

                    <div className='row a-center'>
                        <span style={{ marginRight: 5 }}>Hiển thị</span>
                        <input style={{ width: 50 }} defaultValue={20} placeholder='Số dòng được hiển thị' />
                    </div>

                    <div className='row a-center'>
                        <input defaultValue={1} style={{ width: 50 }} />
                        <span>/10</span>
                    </div>

                    <div className='row'>
                        <Button>Trước</Button>
                        <Button>Sau</Button>
                    </div>
                </div>
            </div>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={this.state.snackOpen}
                onClose={this.onSnackClose()}
                message="Fail to progressive."
                key={'bottom+right'}
            />

            <PopEditProduct ref={c => this.popEditProduct = c} />
        </div>
    }
}
