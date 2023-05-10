// Collateral
import * as React from 'react';
import classNames from "classnames";
import { Col, InputNumber, Row, Slider, Space, Input, Dropdown, Table } from 'antd';
import type { SliderMarks } from 'antd/es/slider';


export default function LimitTBC({ Dai, positionSizeDai, setPositionSizeDaiChange, setLeverage, leverage, openPrice, OnOpenPrice, active, slippage, onSlippageChange }: any) {
    const marks: SliderMarks = {
        2: '2',
        25: '25',
        50: '50',
        75: '75',
        100: '100',
        125: '125',
        150: '150',
    };
    return (
        <>
            <div className={classNames('Tasding_data_content_row2')}>
                <div className={classNames('Tasding_data_content_row2_top')}>
                    <label>
                        Collateral
                        <span> (50 - 125k)</span>
                    </label>
                    <div>

                    </div>
                </div>
                <div className={classNames('Tasding_data_content_row2_btn')}>
                    <input type="text" pattern="^([0-9]+(?:[.,][0-9]*)?)$" value={positionSizeDai} onChange={(e) => setPositionSizeDaiChange(e)} />
                    <span>
                        <img src={Dai} alt="" />
                    </span>
                </div>
            </div>
            <div className={classNames('Tasding_data_content_row3')}>
                <div className='Tasding_data_content_row3_top'>
                    <p>
                        Leverage
                        <span>(2x- 150x)</span>
                    </p>
                    <InputNumber min={2} max={150} style={{ margin: '0 16px' }} value={leverage} onChange={setLeverage} />
                </div>
                <div className='Tasding_data_content_row3_bottom'>
                    <Slider marks={marks} min={2} max={150} onChange={setLeverage} value={typeof leverage === 'number' ? leverage : 0} />
                </div>
            </div>
            <div className={classNames('Tasding_data_content_row4')}>
                <div className={classNames('Tasding_data_content_row4_left')}>
                    <p className={classNames('Tasding_data_content_row4_left_1')}>
                        Price
                    </p>
                    {
                        active ? <InputNumber  style={{ margin: '0 16px' }} value={openPrice} onChange={OnOpenPrice} /> :
                            <p className={classNames('Tasding_data_content_row4_left_2')}>
                                {openPrice}
                            </p>
                    }
                </div>
                <div className={classNames('Tasding_data_content_row4_right')}>
                    <p>
                        Slippage
                        <span>
                            (%)
                        </span>
                    </p>
                    {
                        active ? <p style={{ textAlign: 'center' }} className={classNames('Tasding_data_content_row4_left_2')}>
                            2
                        </p> :
                            <InputNumber min={2} max={150} style={{ margin: '0 16px' }} value={slippage} onChange={onSlippageChange} />
                    }
                </div>
            </div>
        </>
    );
}
