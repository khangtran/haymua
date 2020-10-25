import React from 'react'


const TopHeaders = [{ name: 'Đơn hàng mới', value: 40 },
{ name: 'Đã giao', value: 20 },
{ name: 'Đang giao', value: 10 },
{ name: 'Hoàn thành', value: '10%' },
{ name: 'Sản phẩm chờ duyệt', value: 100 }]

export class DashboardChild extends React.Component {

    state = {
        topHeaders: []
    }

    render() {
        return <div style={{ margin: 8 }}>

            <div className='row h-a-between'>
                {
                    TopHeaders.map((item, index) => <div key={index} className='box' style={{ backgroundColor: 'white' }} >
                        <div className='' style={{ margin: '8px 12px', width: 150 }} >
                            <span style={{ fontSize: 16, color: 'gray' }}>{item.name}</span>
                            <span style={{ fontSize: 22 }} >{item.value}</span>
                        </div>
                    </div>)
                }
            </div>

            <div style={{ height: 10 }} />

            <div className='row h-a-between'>
                <div  >
                    <span>Top 10 đơn hàng mới</span>
                    <div className='box' style={{ height: 300, width: 275 }}>

                    </div>
                </div>

                <div  >
                    <span>Top 10 đơn hàng đang giao</span>
                    <div className='box' style={{ height: 300, width: 275 }}>

                    </div>
                </div>

                <div  >
                    <span>Top 10 sản phẩm chờ duyệt</span>
                    <div className='box' style={{ height: 300, width: 275 }}>

                    </div>
                </div>


            </div>

        </div>
    }
}