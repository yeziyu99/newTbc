import * as React from 'react'
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction, } from 'wagmi'
// import { useDebounce } from './useDebounce'
import { tradingABI } from '../../generated'

// import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
// const queryClient = new QueryClient()

const Planets = () => {

    const [tokenId, setTokenId] = React.useState('');
    // const debouncedTokenId = useDebounce(tokenId, 500)
    const { config } = usePrepareContractWrite({
        address: '0x422527176F8b33977364A2D5aBb332E2E49f21Ce',
        abi: tradingABI,
        functionName: 'mint',
        args: [parseInt('0x90F79bf6EB2c4f870365E785982E1f101E93b906')],
        enabled: Boolean('0x90F79bf6EB2c4f870365E785982E1f101E93b906'),
    })
    const { data, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    write?.()
                }}>
                <label for="tokenId">Token ID</label>
                <input
                    id="tokenId"
                    onChange={(e) => setTokenId(e.target.value)}
                    placeholder="420"
                    value={tokenId}
                />
                <button disabled={!write || isLoading}>
                    {isLoading ? 'Minting...' : 'Mint'}
                </button>
                {isSuccess && (
                    <div>
                        Successfully minted your NFT!
                        <div>
                            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
                        </div>
                    </div>
                )}
            </form>
        </>
    )
}
function Text() {
    return (
    // <QueryClientProvider client={queryClient} contextSharing={true}>
        <Planets />
    // </QueryClientProvider>
    )
    // document.getElementById('root')
}
export default Text;

