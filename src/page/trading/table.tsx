// import React from 'react';
import React, { useEffect, useState } from 'react';
import classNames from "classnames";
// import { Col, InputNumber, Row, Slider, Space, Input, Dropdown, Table } from 'antd';

function Table() {
    useEffect(() => {

    }, [])

    const dataSource: any = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];

    const columns = [
        {
            title: 'Type',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Pair',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Leverage',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Collateral',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Open price',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Price',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Liq/SL',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Take profit',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Net PnL',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Close',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <>
            <div className='Tasding_king_bottom_row'>
                <div className='Tasding_king_bottom_row_head'>
                    <div className='row_head_title'>
                        <div className='trades-active-title frist_title'>
                            <p className='ta-c toberemoved'>
                                Trades (0)
                            </p>
                        </div>
                        <div className='frist_title'>
                            <p className='ta-c toberemoved'>
                                Orders (0)
                            </p>
                        </div>
                    </div>
                    <div className='TradesContainer_headerRight__YqEdz'>
                        <div className='TradesContainer_showAllToggle__MLuKA'>All</div>
                    </div>
                </div>
                <div className='Tasding_king_bottom_row_table'>
                    {/* <Table dataSource={dataSource} columns={columns} pagination={false} /> */}
                </div>
            </div>
        </>
    );
}

export default Table;