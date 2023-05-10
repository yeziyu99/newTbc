import * as React from 'react';
import classNames from "classnames";


export default function StopTBC({ indexStop, stopVal,setIndexChangeOne,stopChange }: any) {
    return (
        <>
            <div className={classNames('Tasding_data_content_row5')}>
                <div className={classNames('Tasding_data_content_row5_top')}>
                    <p >
                        Stop loss
                        <span className='tc-danger'>
                            (None)
                        </span>
                    </p>
                    <p className={classNames(' tc-danger')}>
                        None
                    </p>
                </div>
                <div className={classNames('Tasding_data_content_row5_bottom')}>
                    <div className={classNames(indexStop == 'None' && !stopVal ? 'active' : '')} onClick={() => { setIndexChangeOne('None') }}>NONE</div>
                    <div className={classNames(indexStop == '-10' && !stopVal ? 'active' : '')} onClick={() => { setIndexChangeOne('-10') }}>-10%</div>
                    <div className={classNames(indexStop == '-25' && !stopVal ? 'active' : '')} onClick={() => { setIndexChangeOne('-25') }}>-25%</div>
                    <div className={classNames(indexStop == '50' && !stopVal ? 'active' : '')} onClick={() => { setIndexChangeOne('50') }}>-50%</div>
                    <div className={classNames(indexStop == '-75' && !stopVal ? 'active' : '')} onClick={() => { setIndexChangeOne('-75') }}>-75%</div>
                    <input type="text" placeholder="PRICE" pattern="^([0-9]+(?:[.,][0-9]*)?)$" value={stopVal} onChange={(e) => stopChange(e)} />
                </div>
            </div>
        </>
    );
}
