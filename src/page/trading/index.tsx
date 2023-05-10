import React, { useEffect, useState } from 'react';
import classNames from "classnames";
// //css引入
import './style/index.scss';
// import ReactKline from '../kline';
// // 图片引入
import Dai from '../../assets/images/icons/dai.svg';
// import {OpenTradeButton} from './button';
// import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import Table from './table'
import TradingData from './tradingData'
// import { configureChains, createClient, WagmiConfig } from 'wagmi'
// import { arbitrum, mainnet, polygon } from 'wagmi/chains'
// import { Web3Button, Web3NetworkSwitch, useWeb3ModalTheme } from '@web3modal/react'
// // 滑动条测试
// // import { Slider } from 'antd';
// import { Col, InputNumber, Row, Slider, Space, Input, Dropdown, Table } from 'antd';
// import type { SliderMarks } from 'antd/es/slider';
// // 按钮数据
// import { getDataList } from "../../http/index";
// // import { createWebSocket, closeWebSocket} from '../kline/js/websock';
// // 交易数据
// import { usePrepareContractWrite, useContractWrite, useWaitForTransaction, useAccount } from 'wagmi'
// import { tradingABI } from '../../generated'
// import { BigNumber } from 'ethers'
// import { utils } from 'ethers'

// const chains = [arbitrum, mainnet, polygon]
// const projectId = 'dba7331053371470365be9206718fb4d'
// const { provider } = configureChains(chains, [w3mProvider({ projectId })])
// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, version: 1, chains }),
//   provider
// })
// const ethereumClient = new EthereumClient(wagmiClient, chains)
// interface Cbk {
//   fn?: Function
// }
// export let cpk: Cbk = {};
function Trading() {
  //   const [columnInput, setColumnInput] = useState(50);
  //   const setColumnInputChange = (e: any) => {
  //     var value = e.target.value.replace(/[^\d]/g, '')
  //     setColumnInput(value)
  //   }
  //   const [inputValue, setInputValue] = useState(2);
  //   const [stopVal, setStopVal] = useState(0)
  //   const [takeVal, setTakeVal] = useState(0)
  //   const [title, setTitle] = useState(true);
  //   const [title2, setTitle2] = useState(true);
  //   const [title3, setTitle3] = useState(true);
  //   const [title4, setTitle4] = useState(true);
  //   const [title5, setTitle5] = useState(true);
  //   const onChange = (newValue: any) => {
  //     setInputValue(newValue);
  //   };

  //   const setIndexChangeOne = (value: any) => {
  //     // var value = e.target.value.replace(/[^\d]/g, '')
  //     if (value) {
  //       setStopVal(0)
  //     }
  //     setIndex1(value)
  //   }
  //   const setIndexChangeTwo = (value: any) => {
  //     // var value = e.target.value.replace(/[^\d]/g, '')
  //     if (value) {
  //       setTakeVal(0)
  //     }
  //     setIndex2(value)
  //   }
  //   const stopChange = (e: any) => {
  //     var value = e.target.value.replace(/[^\d]/g, '')
  //     if (value) {
  //       setIndex1(value)
  //     }
  //     setStopVal(value)
  //   }
  //   const takeChange = (e: any) => {
  //     var value = e.target.value.replace(/[^\d]/g, '')
  //     if (value) {
  //       setIndex2(value)
  //     }
  //     setTakeVal(value)
  //   }
  //   const marks: SliderMarks = {
  //     2: '2',
  //     25: '25',
  //     50: '50',
  //     75: '75',
  //     100: '100',
  //     125: '125',
  //     150: '150',
  //   };
  //   const [windowSize, setWindowSize] = useState(getWindowSize());
  //   let klinesData = {}
  //   let params = {
  //     symbol: 'AUDJPY',
  //     type: 15,
  //     limit: 600,
  //     stop_time: 1680511864020
  //   }
  //   const items: any = [
  //     {
  //       key: '1',
  //       label: '1st menu item',
  //     },
  //   ]
  //   const { theme, setTheme } = useWeb3ModalTheme()
  //   useEffect(() => {
  //     setTheme({
  //       themeMode: 'dark',
  //       themeVariables: {
  //         '--w3m-font-family': 'Roboto, sans-serif',
  //         '--w3m-accent-color': 'rgb(121,76,255)',
  //         '--w3m-background-color': 'rgb(121,76,255)'
  //       }
  //     })
  //     function handleWindowResize() {
  //       setWindowSize(getWindowSize());
  //     }
  //     getKlinesData()

  //     window.addEventListener('resize', handleWindowResize);

  //     return () => {
  //       window.removeEventListener('resize', handleWindowResize);
  //     };
  //   }, []);


  // function onRequestData(param: any, callback: any) {

  //     // 判断请求参数（品种和type的变化，如果变化需要重新获取历史记录）
  //     if (params.symbol !== param.symbol || params.type != param.type) {
  //       params = { ...param }
  //       cpk.fn = callback
  //       getKlinesData()
  //     }

  //     // setParams(param)
  //     callback(klinesData)
  //   }

  //   function getWindowSize() {
  //     const { innerWidth, innerHeight } = window;
  //     return { innerWidth: innerWidth - 480, innerHeight: innerHeight - 290 - 63 - 96 };
  //   }
  //   async function getKlinesData() {
  //     let obj: any = {}
  //     let res = await getDataList(params);
  //     if (res) {
  //       let arr: any = []
  //       res.data.data.records.map((item: any) => {
  //         let line: any = []
  //         for (const key in item) {
  //           if (key === 'time') {
  //             item[key] = item[key] * 1000
  //           } else {
  //             item[key] = Number(item[key])
  //           }
  //           line.push(item[key])
  //         }
  //         arr.push(line)
  //       })
  //       res.data.data.lines = arr.reverse()
  //       obj = res.data
  //       klinesData = obj
  //       console.log(obj)

  //     }
  //   }
  //   const dataSource: any = [
  //     // {
  //     //   key: '1',
  //     //   name: '胡彦斌',
  //     //   age: 32,
  //     //   address: '西湖区湖底公园1号',
  //     // },
  //     // {
  //     //   key: '2',
  //     //   name: '胡彦祖',
  //     //   age: 42,
  //     //   address: '西湖区湖底公园1号',
  //     // },
  //   ];

  //   const columns = [
  //     {
  //       title: 'Type',
  //       dataIndex: 'name',
  //       key: 'name',
  //     },
  //     {
  //       title: 'Pair',
  //       dataIndex: 'age',
  //       key: 'age',
  //     },
  //     {
  //       title: 'Leverage',
  //       dataIndex: 'address',
  //       key: 'address',
  //     },
  //     {
  //       title: 'Collateral',
  //       dataIndex: 'address',
  //       key: 'address',
  //     },
  //     {
  //       title: 'Open price',
  //       dataIndex: 'address',
  //       key: 'address',
  //     },
  //     {
  //       title: 'Price',
  //       dataIndex: 'address',
  //       key: 'address',
  //     },
  //     {
  //       title: 'Liq/SL',
  //       dataIndex: 'address',
  //       key: 'address',
  //     },
  //     {
  //       title: 'Take profit',
  //       dataIndex: 'address',
  //       key: 'address',
  //     },
  //     {
  //       title: 'Net PnL',
  //       dataIndex: 'address',
  //       key: 'address',
  //     },
  //     {
  //       title: 'Close',
  //       dataIndex: 'address',
  //       key: 'address',
  //     },
  //   ];
  //   const [active, setActive] = useState(false)
  //   const [index, setIndex] = useState('1')
  //   const [index1, setIndex1] = useState(50)
  //   const [index2, setIndex2] = useState(900)
  //   const [disabled, setDisabled] = useState(true)
  //   const [openPrice, setOpenPrice] = useState(1)
  //   const [slippage, setSlippage] = useState(1)
  //   const onDisabledChange = (value: any) => {
  //     if (!value&&index2==900) {
  //       setIndex2(100)
  //     }
  //     setDisabled(value)
  //   }
  //   const onSlippageChange = (e: any) => {
  //     var value = e.target.value.replace(/[^\d]/g, '')
  //     setSlippage(value)
  //   }
  //   const OnOpenPrice = (e: any) => {
  //     var value = e.target.value.replace(/[^\d]/g, '')
  //     setOpenPrice(value);
  //   };
  //   const { address: loginTrader } = useAccount();
  // //   const {
  // //     config,
  // //     error: prepareError,
  // //     isError: isPrepareError,
  // // } = usePrepareContractWrite({
  // //     address: '0x422527176F8b33977364A2D5aBb332E2E49f21Ce',
  // //     abi: tradingABI,
  // //     functionName: 'openTrade',
  // //     args: [{
  // //         // trader: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
  // //       trader:loginTrader, // 当前登录钱包的地址
  // //       pairIndex:BigNumber.from(0), // 根据交易品种名称匹配所有交易对数组获取 pairIndex
  // //       index: BigNumber.from(0), // 写死0
  // //       initialPosSizeDai: BigNumber.from(0), // 写死0
  // //       positionSizeDai: utils.parseUnits(columnInput+'', 18),
  // //       openPrice: utils.parseUnits(openPrice+'', 10),
  // //       buy: disabled,
  // //       leverage: BigNumber.from(inputValue),
  // //       tp: BigNumber.from(takeVal||index2),
  // //       sl: BigNumber.from(stopVal||index1)
  // //     },
  // //         0,
  // //     utils.parseUnits(slippage+'', 10)
  // //     ],
  // // })
  // // const { data, error, isError, write } = useContractWrite(config)

  // // const { isLoading, isSuccess } = useWaitForTransaction({
  // //     hash: data?.hash,
  // // })
  //   const approve= ()=>{
  //     let obj = {
  //       trader:loginTrader, // 当前登录钱包的地址
  //       pairIndex:BigNumber.from(0), // 根据交易品种名称匹配所有交易对数组获取 pairIndex
  //       index: BigNumber.from(0), // 写死0
  //       initialPosSizeDai: BigNumber.from(0), // 写死0
  //       positionSizeDai: utils.parseUnits(columnInput+'', 18),
  //       openPrice: utils.parseUnits(openPrice+'', 10),
  //       buy: disabled,
  //       leverage: BigNumber.from(inputValue),
  //       tp: BigNumber.from(takeVal||index2),
  //       sl: BigNumber.from(stopVal||index1)
  //     }
  //     console.log(obj)
  //   }
  return (
    <>
      {/* <WagmiConfig client={wagmiClient}> */}
      <div className={classNames('Tasding')}>
        <div className={classNames('Tasding_king')}>
          <div className={classNames('Tasding_king_img')}>
            <div className='PairSelectionContainer_container__4JaAm'>

              {/* <div className='CurrentPairInfo_container__JHYj6'>
                  <div className='CurrentPairInfo_mainRow__KICmC'>
                    <Dropdown menu={{ items }}>
                      <a className='PairDropdownToggle_name__G5rOV' onClick={(e) => e.preventDefault()}>
                        <Space>
                          EOS/USD
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </div>
                  
                </div> */}
            </div>
            K线图
            {/* <ReactKline
                width={windowSize.innerWidth}
                height={windowSize.innerHeight}
                ranges={["1w", "1d", "1h", "30m", "15m", "5m", "1m", "line"]}
                symbol={"AUDJPY"}
                symbolName={"AUDJPY/USD"}
                intervalTime={10000}
                depthWidth={100}
                debug={false}
                onRequestData={onRequestData}
              /> */}
          </div>
          {/* 下边 */}
          <div className={classNames('Tasding_king_bottom')}>
            <Table />
          </div>
        </div>
        {/* 左边数据 */}
        <div className={classNames('Tasding_data')}>
          <TradingData />
        </div>
      </div>
    </>
  );
}



export default Trading;