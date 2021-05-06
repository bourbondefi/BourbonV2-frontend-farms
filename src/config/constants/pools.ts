import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
 
  {
    sousId: 69, // V0
    tokenName: 'BESKAR',
    tokenLabel: 'BESKAR',
    tokenAddress: '0xa9f38Bd5084B6EB4eAF6e47E01Ff7a17e9c9EEa0',
    stakingTokenName: QuoteToken.MANDO,
    stakingTokenAddress: '0xFd5acC2016317eC2D970ba8D96bC8675Ff5aF56C',
    contractAddress: {
      97: '',
      56: '0x18c863167152AC6dD55c1d3BAA47aC09351f2716',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://bourbondefi.com',
    harvest: true,
    tokenPerBlock: '1000000',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
    isBush: true,
    bushVersion: 0,
  },
]

export default pools
