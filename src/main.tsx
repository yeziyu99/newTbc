import { EthereumClient } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { WagmiConfig } from 'wagmi'
import { BrowserRouter } from "react-router-dom"

import { App } from './App'
import { chains, client, walletConnectProjectId } from './wagmi'

const ethereumClient = new EthereumClient(client, chains)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Web3Modal
        projectId={walletConnectProjectId}
        ethereumClient={ethereumClient}
      />
    </WagmiConfig>
  </React.StrictMode>,
)
