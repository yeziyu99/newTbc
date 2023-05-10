// import React from 'react';
import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import Dai from '../../assets/images/icons/dai.svg';
import LongTBC from "../../components/LongTBC";
import LimitTBC from "../../components/LimitTBC";
import Collateral from "../../components/Collateral";
import StopTBC from "../../components/StopTBC";
import TakeTBC from "../../components/TakeTBC";
import { OpenTradeButton } from '../../components/OpenTradeButton';


import { useWeb3ModalTheme } from '@web3modal/react'
function TradingData() {
  const [active, setActive] = useState(false)
  const [positionSizeDai, sePositionSizeDai] = useState('0')

  const [buy, setBuy] = useState('long')
  const [limit, setLimit] = useState('market') //Market=>0/Limit=>1/Stop=>2
  const [leverage, setLeverage] = useState('2')
  const [openPrice, setOpenPrice] = useState('1900')
  const [slippage, setSlippage] = useState('1')
  const [stopVal, setStopVal] = useState('None')
  const [takeVal, setTakeVal] = useState('None')
  const [indexStop, setIndexStop] = useState('None')
  const [indexTake, setIndexTake] = useState('None')
  const [tpPrice, setTpPrice] = React.useState('None');
  const [profitDai, setProfitDai] = React.useState('None');
  const [slPrice, setSlPrice] = React.useState('None');
    const [lossDai, setLossDai] = React.useState('None');
  const onsetBuy = (value: any) => {
    if (value=='short'&&indexTake=='900') {
      setIndexTake('100')
    }
    setBuy(value)
  }
  const setPositionSizeDaiChange = (e: any) => {
    console.log(e)
    var value = e.target.value.replace(/[^\d]/g, '')
    sePositionSizeDai(value)
  }
  const OnOpenPrice = (value: any) => {
    setOpenPrice(value?value+'':'0');
  };
  const onSlippageChange = (e: any) => {
    var value = e.target.value.replace(/[^\d]/g, '')
    setSlippage(value)
  }
  const setIndexChangeOne = (value: any) => {
    // var value = e.target.value.replace(/[^\d]/g, '')
    if (value) {
      setStopVal('None')
    }
    setIndexStop(value)
  }
  const setIndexChangeTwo = (value: any) => {
    // var value = e.target.value.replace(/[^\d]/g, '')
    if (value) {
      setTakeVal('None')
    }
    setIndexTake(value)
  }
  const stopChange = (e: any) => {
    var value = e.target.value.replace(/[^\d]/g, '')
    if (value) {
      setStopVal(value)
    }
    setStopVal(value)
  }
  const takeChange = (e: any) => {
    var value = e.target.value.replace(/[^\d]/g, '')
    if (value) {
      setTakeVal(value)
    }
    setTakeVal(value)
  }
  const { theme, setTheme } = useWeb3ModalTheme()
  useEffect(() => {
    setTheme({
      themeMode: 'dark',
      themeVariables: {
        '--w3m-font-family': 'Roboto, sans-serif',
        '--w3m-accent-color': 'rgb(121,76,255)',
        '--w3m-background-color': 'rgb(121,76,255)',
      }
    })

    return () => {
    };
  }, []);
  return (
    <>
      <LongTBC buy={buy} onsetBuy={onsetBuy} />
      <div className={classNames('Tasding_data_content')}>
        <LimitTBC limit={limit} setLimit={setLimit} setActive={setActive} />
        <Collateral Dai={Dai} positionSizeDai={positionSizeDai} setPositionSizeDaiChange={setPositionSizeDaiChange} leverage={leverage} setLeverage={setLeverage} OnOpenPrice={OnOpenPrice} openPrice={openPrice} active={active} slippage={slippage} onSlippageChange={onSlippageChange} />
        <StopTBC indexStop={indexStop} stopVal={stopVal} setIndexChangeOne={setIndexChangeOne} stopChange={stopChange} slPrice={slPrice} lossDai={lossDai}/>
        <TakeTBC indexTake={indexTake} takeVal={takeVal} setIndexChangeTwo={setIndexChangeTwo} takeChange={takeChange} setTakeVal={setTakeVal} buy={buy} tpPrice={tpPrice} profitDai={profitDai}/>
        <OpenTradeButton positionSizeDai={positionSizeDai} openPrice={openPrice} buy={buy} leverage={leverage} sl={stopVal} tp={takeVal} slippage={slippage} limit={limit} />
        {/* <div style={{ marginTop: 20, marginBottom: 8 }} className='Tasding_data_content_row8 TradingPanel_orderStatus__ZRa1_'>
                <span>EOS/USD</span>
                <span className='tc-danger'>Wallet not connected</span>
              </div>
              <div style={{ marginBottom: 8 }} className='Tasding_data_content_row8 '>
                <span className='Tooltip_tooltipCursor' onMouseOut={() => { setTitle(true) }} onMouseOver={() => { setTitle(false) }}>Est. Execution Price
                  <div className={classNames({ 'displayNone': title })}>
                    The estimated price including spread at which your trade will execute.
                  </div>
                </span>
                <span className='tc-danger'>1.0565</span>
              </div>
              <div style={{ marginBottom: 8 }} className='Tasding_data_content_row8 '>
                <span className='Tooltip_tooltipCursor' onMouseOut={() => { setTitle2(true) }} onMouseOver={() => { setTitle2(false) }}>Spread
                  <div className={classNames({ 'displayNone': title2 })}>
                    Current market spread
                  </div>
                </span>
                <span className='tc-danger'>0.00%</span>
              </div>
              <div style={{ marginBottom: 8 }} className='Tasding_data_content_row8 '>
                <span className='Tooltip_tooltipCursor' onMouseOut={() => { setTitle3(true) }} onMouseOver={() => { setTitle3(false) }}>Position Size
                  <div className={classNames({ 'displayNone': title3 })}>
                    Collateral * Leverage
                  </div>
                </span>
                <span className='tc-danger'>100 DAI</span>
              </div>
              <div style={{ marginBottom: 8 }} className='Tasding_data_content_row8 '>
                <span className='Tooltip_tooltipCursor' onMouseOut={() => { setTitle4(true) }} onMouseOver={() => { setTitle4(false) }}>Fees
                  <div className={classNames({ 'displayNone': title4 })}>
                    Learn more
                  </div>
                </span>
                <span className='tc-danger'>0.1 DAI</span>
              </div>
              <div style={{ marginBottom: 8 }} className='Tasding_data_content_row8 '>
                <span className='Tooltip_tooltipCursor' onMouseOut={() => { setTitle5(true) }} onMouseOver={() => { setTitle5(false) }}>Liq. Price
                  <div className={classNames({ 'displayNone': title5 })}>
                    If this price is reached, your position will be
                    closed and your collateral lost.
                  </div>
                </span>
                <span className='tc-danger'>0.581075</span>
              </div> */}
      </div>
    </>
  );
}

export default TradingData;