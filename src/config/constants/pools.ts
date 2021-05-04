import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
 
  {
    sousId: 67, // V1
    tokenName: 'BESKAR',
    tokenLabel: 'BESKAR',
    tokenAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    stakingTokenName: QuoteToken.MANDO,
    stakingTokenAddress: '0xFd5acC2016317eC2D970ba8D96bC8675Ff5aF56C',
    contractAddress: {
      97: '',
      56: '0x18c863167152AC6dD55c1d3BAA47aC09351f2716',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://bourbondefi.com',
    harvest: true,
    tokenPerBlock: '1000',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 9,
    isBush: true,
    bushVersion: 1,
  },
]

export default pools
