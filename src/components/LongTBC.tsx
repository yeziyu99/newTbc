import * as React from 'react';
import classNames from "classnames";


export default function LongTBC({ buy, onsetBuy }: any) {
    return (
        <>
            <ul className={classNames('Tasding_data_title')}>
                <li className={classNames(buy=='long' ? 'active' : '')} onClick={() => { onsetBuy('long') }}>Long</li>
                <li className={classNames(buy=='short' ? 'short' : '')} onClick={() => { onsetBuy('short') }}>Short</li>
            </ul>
        </>
    );
}
