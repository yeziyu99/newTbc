import * as React from 'react';
import classNames from "classnames";


export default function LimitTBC({ limit, setLimit, setActive, }: any) {
    return (
        <>
            <ul className={classNames('Tasding_data_content_row')}>
                <li onClick={() => {
                    setActive(false)
                    setLimit('market')
                }} className={classNames((limit == 'market' ? 'active' : ''))}>Market</li>
                <li className={classNames((limit == 'limit' ? 'active' : ''))} onClick={() => {
                    setActive(true)
                    setLimit('limit')
                }}>Limit</li>
                <li className={classNames((limit == 'stop' ? 'active' : ''))} onClick={() => {
                    setActive(true)
                    setLimit('stop')
                }}>Stop</li>
            </ul>
        </>
    );
}
