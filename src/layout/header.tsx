import React, { useEffect, useState } from 'react';
// import Router from '../router/index'
import { useParams } from 'react-router-dom';
//css引入
import './style/header.scss';
//图片引入
import Logo from '../assets/images/logo.png'
import ExternalLink from '../assets/images/external-link.png'
//class引入 可以判断的class名
import classNames from "classnames";
import { useNavigate, useLocation } from 'react-router-dom'
import WalletBar from '../components/WalletBar';
function Header(props:any) {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        
    }, [])
    let history=useNavigate()
    const [routeName, setRouteName] = useState('');
    const [active, setActive] = useState(false);
    return (
        <>
      {/* <WagmiConfig client={wagmiClient}> */}
        <div  className="Header">
            <div className="header_con">
                <div className="display_align" >
                    <div className="display_align header_logo" >
                        <img src={Logo} className="cursor_pointer" onClick={() => {navigate('/') }} alt="logo" />
                        <span onClick={() => {navigate('/') }}>TBC</span>
                    </div>
                    <nav className="header_navbar">
                        <ul className="header_navbar_ulOne fontW700">
                                    <li className={classNames('header_route', { 'li_nav': location.pathname=== '/' }, 'fontW700')} onClick={() => {navigate('/') }}>
                                <span>
                                    Trade
                                </span>
                            </li>
                            <li className={classNames('header_route', { 'li_nav': location.pathname === '/Vault', }, 'fontW700', 'li_nav_duo')} onMouseOver ={() => { setActive(true) }} onMouseOut={() => { setActive(false) }} >
                                <span>
                                    Earn
                                </span>
                                <div className={classNames('hoverMenu',{'display_inline_block':active})}>
                                    <div className="hoverMenuContainer">
                                        <ul className="hoverMenuContainer_list">
                                            <li onClick={() => {navigate('/Vault')}}>Vault </li>
                                            {/* <li >OTC </li>
                                            <li >
                                                <span>
                                                    Staking
                                                </span>
                                                <img className="link_img" src={ExternalLink} alt="" />

                                            </li>
                                            <li >Referrals </li> */}
                                        </ul>
                                        <div className="hoverMenuContainer_icon"></div>
                                    </div>
                                </div>
                            </li>
                            {/* <li className={ classNames('header_route', 'fontW700' )}>
                                <span>Bridge</span>
                            </li>
                            <li className={ classNames('header_route', 'fontW700') }>
                                <span>
                                    Statistics
                                </span>
                                <img className="link_img" src={ExternalLink} alt="" />

                            </li>
                            <li className={ classNames('header_route', 'fontW700') }>
                                <span>
                                    Documentation
                                </span>
                                <img className="link_img" src={ExternalLink} alt="" />

                            </li> */}
                        </ul >
                    </nav >
                </div >
                <div className="menu_btns">
                            <WalletBar />
                    {/* <ul className="menu_btns_ul" >
                        <li>
                            <Web3NetworkSwitch className="heaser_bbb1"/>
                            <button className="menu_btns_select cursor_pointer">
                                <img className="menu_btns_select_left" src={PolygonLogo} alt="" />
                                <span className="menu_btns_select_title">Polygon</span>
                                <img className="menu_btns_select_right" src={DownArrow} alt="" />
                            </button>
                        </li>
                                <li style={{ position: 'relative' }} >
                                    className="heaser_bbb2"
                            <Web3Button icon="show" label="Connect Wallet" balance="show"  />
                            <button className="menu_btns_icon cursor_pointer">
                                <span>Connect</span>
                                <span> Wallet</span>
                                <span className="icon-svg icon-connect"></span>
                            </button>
                        </li>
                    </ul> */}
                    {/* <div className="header_icons">
                        <button className="header_icons_btn cursor_pointer"><span></span></button>
                    </div> */}
                </div>
            </div>
        </div >
      {/* </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
    </>
  );
}

export default Header;