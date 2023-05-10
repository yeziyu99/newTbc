import * as React from 'react';
import classNames from "classnames";


export default function TakeTBC({ indexTake, takeVal, setIndexChangeTwo, setTakeVal ,buy,takeChange,tpPrice,profitDai}: any) {
    return (
        <>
            <div className={classNames('Tasding_data_content_row6_bun')}>
                <div className='Tasding_data_content_row6_top'>
                    <p >
                        Take profit
                        <span className='tc-success'>
                            {/* (5.69937) */}
                            ({tpPrice})
                        </span>
                    </p>
                    <p className={classNames(' tc-success')}>
                        {/* +450.0 DAI */}
                        {profitDai}
                    </p>
                </div>
                <div className={classNames('Tasding_data_content_row6_bottom')}>
                    <div className={classNames(indexTake == '25' && !takeVal ? 'active' : '')} onClick={() => { setIndexChangeTwo('25') }}>25%</div>
                    <div className={classNames(indexTake == '50' && !takeVal ? 'active' : '')} onClick={() => { setIndexChangeTwo('50') }}>50%</div>
                    <div className={classNames(indexTake == '100' && !takeVal ? 'active' : '')} onClick={() => { setIndexChangeTwo('100') }}>100%</div>
                    <div className={classNames(indexTake == '300' && !takeVal ? 'active' : '')} onClick={() => { setIndexChangeTwo('300') }}>300%</div>
                    <div className={classNames((indexTake == '900' && !takeVal ? 'active' : ''), (buy ? '' : 'disabled-select'))} onClick={() => { setTakeVal('900') }}>900%</div>
                    <input type="text" placeholder="PRICE" pattern="^([0-9]+(?:[.,][0-9]*)?)$" value={takeVal} onChange={(e) => takeChange(e)} />
                </div>
            </div>
        </>
    );
}
