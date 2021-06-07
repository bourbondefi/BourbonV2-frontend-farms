import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
 
  {
    sousId: 76, // V1
    tokenName: 'RBT',
    tokenLabel: 'BRRL-BNB',
    tokenAddress: '0x7595bb34Bf391C3de0a6878A36D06223b2BFd404',
    stakingTokenName: QuoteToken.BRRLBNB,
    stakingTokenAddress: '0xb6320c8e808b961ac015ed4e801ee999a0bb23fe',
    contractAddress: {
      97: '',
      56: '0x555D6cB5c1F8D6454C401114B8955Aa3F6d29652',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://bourbondefi.com',
    harvest: true,
    tokenPerBlock: '0.000000074404761904',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    isBush: true,
    bushVersion: 1,
  },
  {
    sousId: 77, // V1
    tokenName: 'RBT',
    tokenLabel: 'RBT-BNB',
    tokenAddress: '0x7595bb34Bf391C3de0a6878A36D06223b2BFd404',
    stakingTokenName: QuoteToken.RBTBNB,
    stakingTokenAddress: '0xc97b05f916a851df01049b804ceea6a8fdcda848',
    contractAddress: {
      97: '',
      56: '0x7722D19A8A1dF904762AAE8Af2DF2DA8EB115Af0',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://bourbondefi.com',
    harvest: true,
    tokenPerBlock: '0.000000744047619047',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    isBush: true,
    bushVersion: 1,
  },
  {
    sousId: 78, // V1
    tokenName: 'RBT',
    tokenLabel: 'TSB-BNB',
    tokenAddress: '0x7595bb34Bf391C3de0a6878A36D06223b2BFd404',
    stakingTokenName: QuoteToken.TSBBNB,
    stakingTokenAddress: '0xCbdb89D56E7501Ba22732cF549E796aBB6346B02',
    contractAddress: {
      97: '',
      56: '0x555D6cB5c1F8D6454C401114B8955Aa3F6d29652',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://bourbondefi.com',
    harvest: true,
    tokenPerBlock: '0.0000074404761904',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    isBush: true,
    bushVersion: 1,
  },
]

export default pools
