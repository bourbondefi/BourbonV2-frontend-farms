import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 23,
    isTokenOnly: true,
    lpSymbol: 'TSB',
    lpAddresses: {
      97: '',
      56: '0xe336b16B7d26B94F3E86Fe124Be5207162C22d90',
    },
    tokenSymbol: 'TSB',
    tokenAddresses: {
      97: '',
      56: '0xA37F71f092F891757d23Dd350f57C78E8469c026',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 31,
    lpSymbol: 'TSB-BNBv2',
    lpAddresses: {
      97: '',
      56: '0xCbdb89D56E7501Ba22732cF549E796aBB6346B02', // TSB-BNB V2 LP
    },
    tokenSymbol: 'TSB',
    tokenAddresses: {
      97: '',
      56: '0xA37F71f092F891757d23Dd350f57C78E8469c026',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 32,
    lpSymbol: 'BRRL-BNBV2',
    lpAddresses: {
      97: '',
      56: '0xb6320c8e808b961ac015ed4e801ee999a0bb23fe',
    },
    tokenSymbol: 'BRRL',
    tokenAddresses: {
      97: '',
      56: '0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 33,
    lpSymbol: 'RBT-BNBV2',
    lpAddresses: {
      97: '',
      56: '0xc97b05f916a851df01049b804ceea6a8fdcda848',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34bf391c3de0a6878a36d06223b2bfd404',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 34,
    lpSymbol: 'BRRL-BUSDV2',
    lpAddresses: {
      97: '',
      56: '0x70af18dc5556766bbd01da0d30123ff191f664b6',
    },
    tokenSymbol: 'BRRL',
    tokenAddresses: {
      97: '',
      56: '0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 35,
    lpSymbol: 'RBT-BUSDV2',
    lpAddresses: {
      97: '',
      56: '0x9bc90e1e33a8a85dfa1db813af027fd342d2af0b',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34bf391c3de0a6878a36d06223b2bfd404',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 36,
    lpSymbol: 'TSB-BUSDV2',
    lpAddresses: {
      97: '',
      56: '0x2A9272FfDE448ba1F3538Ad85811C42217A7f46f',
    },
    tokenSymbol: 'TSB',
    tokenAddresses: {
      97: '',
      56: '0xA37F71f092F891757d23Dd350f57C78E8469c026',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 22,
    isTokenOnly: true,
    lpSymbol: 'RBT',
    lpAddresses: {
      97: '',
      56: '0x6392aC63A851497Fc1F86946923a365162518E30',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34bf391c3de0a6878a36d06223b2bfd404',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 24,
    isTokenOnly: true,
    lpSymbol: 'BRRL',
    lpAddresses: {
     97: '',
      56: '0xb6320c8e808b961ac015ed4e801ee999a0bb23fe', // BRRL-BNB
    },
    tokenSymbol: 'BRRL',
    tokenAddresses: {
     97: '',
     56: '0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
   },
   quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 21,
    lpSymbol: 'TSB-BNB',
    lpAddresses: {
      97: '',
      56: '0x14f18e33c9e4551578cc4ce5243184288f13fe67', // TSB-BNB LP
    },
    tokenSymbol: 'TSB',
    tokenAddresses: {
      97: '',
      56: '0xA37F71f092F891757d23Dd350f57C78E8469c026',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 0,
    lpSymbol: 'RBT-BRRL LP',
    lpAddresses: {
      97: '',
      56: '0x77a6024Ce12C94A326Ba87eA66E7f2dfDFC8bc1e',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34Bf391C3de0a6878A36D06223b2BFd404',
    },
    quoteTokenSymbol: QuoteToken.BRRL,
    quoteTokenAdresses: contracts.brrl,
  },
  {
    pid: 1,
    lpSymbol: 'BRRL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b30e60130b364DDfC0267525d7D8039d795FB33',
    },
    tokenSymbol: 'BRRL',
    tokenAddresses: {
      97: '',
      56: '0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    lpSymbol: 'RBT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3F8F14Dd4Ef2a2DBD3C1B87f96EdD028663c76b1',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34bf391c3de0a6878a36d06223b2bfd404',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'RBT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6392aC63A851497Fc1F86946923a365162518E30',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34bf391c3de0a6878a36d06223b2bfd404',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x6392aC63A851497Fc1F86946923a365162518E30', // RBT-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    lpSymbol: 'SWAMP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa823C74dE2343E922ab24520f29D08390B4e894D', // SWAMP-BNB LP
    },
    tokenSymbol: 'SWAMP',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'RBT-INJ LP',
    lpAddresses: {
      97: '',
      56: '0x3b87B536927d2E56430A2F1481cFfD5011B98C70', // RBT-INJ LP
    },
    tokenSymbol: 'INJ',
    tokenAddresses: {
      97: '',
      56: '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
    },
    quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 10,
    lpSymbol: 'RBT-DOT LP',
    lpAddresses: {
      97: '',
      56: '0x225E127B3079a32147F51dcCA8a9b22f6A796448', // RBT-DOT LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 11,
    lpSymbol: 'RBT-LINK LP',
    lpAddresses: {
      97: '',
      56: '0x6a7f570946c25cbcc8d0fcd1f0c8db1ff6ff66bf', // RBT-LINK LP
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 12,
    lpSymbol: 'RBT-SQUIRE LP',
   lpAddresses: {
      97: '',
      56: '0xf61525267C93265d8573fB5a57B9f2CfEa817214', // RBT-SQUIRE LP
    },
    tokenSymbol: 'SQUIRE',
    tokenAddresses: {
      97: '',
      56: '0x2f0d21f1b84f03fb9d60004fc206c86be6902a32',
    },
    quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 13,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
     97: '',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422', // ETH-BNB LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
     97: '',
     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
   },
   quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 14,
    lpSymbol: 'RBT-ADA LP',
    lpAddresses: {
     97: '',
      56: '0x2331beb6dc11de0d745a8cf6c53afc35167a8bf1', // RBT-ADA LP
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
     97: '',
     56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
   },
   quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 15,
    lpSymbol: 'RBT-CAKE LP',
    lpAddresses: {
     97: '',
      56: '0x5ac20128b14debed0abacf46a7e78b90bc99b0d8', // RBT-CAKE LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
     97: '',
     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
   },
   quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 16,
    lpSymbol: 'RBT-EGLD LP',
    lpAddresses: {
     97: '',
      56: '0x08a0960405dbb44b38d1b8f34fb802ec601af63b', // RBT-EGLD LP
    },
    tokenSymbol: 'EGLD',
    tokenAddresses: {
     97: '',
     56: '0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe',
   },
   quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 17,
    lpSymbol: 'RBT-FIL LP',
    lpAddresses: {
     97: '',
      56: '0xe508545ecdffa06f2fc38befe0a941effa44c20b', // RBT-FIL LP
    },
    tokenSymbol: 'FIL',
    tokenAddresses: {
     97: '',
     56: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
   },
   quoteTokenSymbol: QuoteToken.RBT,
    quoteTokenAdresses: contracts.rbt,
  },
  {
    pid: 18,
    isTokenOnly: true,
    lpSymbol: 'CARDANO',
    lpAddresses: {
     97: '',
      56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf', // ADA-BNB
    },
    tokenSymbol: 'CARDANO',
    tokenAddresses: {
     97: '',
     56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
   },
   quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 19,
    isTokenOnly: true,
    lpSymbol: 'XRP',
    lpAddresses: {
     97: '',
      56: '0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2', // XRP-BNB
    },
    tokenSymbol: 'XRP',
    tokenAddresses: {
     97: '',
     56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
   },
   quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 20,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
     97: '',
      56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c', // DOT-BNB
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
     97: '',
     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
   },
   quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 25,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 26,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 27,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 28,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 29,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 30,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 37,
    isTokenOnly: true,
    lpSymbol: 'DOGE',
    lpAddresses: {
      97: '',
      56: '0x1Efcb446bFa553A2EB2fff99c9F76962be6ECAC3', // DOGE-BUSD LP
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '',
      56: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 38,
    isTokenOnly: true,
    lpSymbol: 'LTC',
    lpAddresses: {
      97: '',
      56: '0xBc765Fd113c5bDB2ebc25F711191B56bB8690aec', // LTC-BNB LP
    },
    tokenSymbol: 'LTC',
    tokenAddresses: {
      97: '',
      56: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 39,
    lpSymbol: 'BTCB-BNB',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082', // BTCB-BNB LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 40,
    lpSymbol: 'CAKE-BNB',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0', // CAKE-BNB
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 41,
    lpSymbol: 'SWAMP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x59Fe1dcdCD8918fe7B4e76E21f27599d5a1eAADb', // SWAMP-BNB LP
    },
    tokenSymbol: 'SWAMP',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
