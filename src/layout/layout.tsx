import React,{ useEffect } from 'react';
import Header from './header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { useLocation, useParams, } from 'react-router-dom'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal, Web3Button, Web3NetworkSwitch } from '@web3modal/react'
import { configureChains, createClient, useAccount, useConnect, useContract, WagmiConfig } from 'wagmi'
import { arbitrum, foundry, mainnet, Chain } from 'wagmi/chains'
// import './chartmain.js';

const devChain = {
  id: 37139,
  name: 'devChain',
  network: 'devChain',
  nativeCurrency: {
    decimals: 18,
    name: 'ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['http://152.32.198.202:8545'] },
    default: { http: ['http://152.32.198.202:8545'] },
  }
} as const satisfies Chain

// 1. Set projectID
const projectId = 'dba7331053371470365be9206718fb4d';

// 2. Configure wagmi client
const chains = [foundry, devChain]
const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains)
function Layout(props:any) {
  useEffect(() => {
  }, [])
  return (
    <div className="layout">
      {/* <div>layout</div>
      <Router></Router> */}
      {/* <Router></Router> */}
      <WagmiConfig client={wagmiClient}>
      <Header></Header>
        {/* <Container maxWidth="xl" sx={{ my: 1, display: 'inline-flex' }}>
          <Container maxWidth="xs"></Container>
          <WalletBar />
        </Container> */}

        {/* <Container maxWidth="xl" sx={{ my: 1, display: 'inline-flex' }}>
          <Container id="tv_chart_container" maxWidth="md" sx={{ my: 0 }}>
          </Container>
          <TradingPage />
        </Container>

        <OrdersPage /> */}
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  );
}

export default Layout;