import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'BUSD-BNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ETH-BNB',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc', // ETH-BNB LP
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
    pid: 2,
    lpSymbol: 'BOURBON-BUSD',
    lpAddresses: {
      97: '',
      56: '0x489B177F032c471E04eD1Dd062aAd46536DD0Ff4', // BOURBON-BUSD LP
    },
    tokenSymbol: 'BOURBON',
    tokenAddresses: {
      97: '',
      56: '0x953eFEBe00e7D573f027396f1E06231e04F7597f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    lpSymbol: 'BOURBON-BNB',
    lpAddresses: {
      97: '',
      56: '0x951a7e71004C456c1FF7c0D2bB2E94aC402C1A41', // BOURBON-BNB LP
    },
    tokenSymbol: 'BOURBON',
    tokenAddresses: {
      97: '',
      56: '0x953eFEBe00e7D573f027396f1E06231e04F7597f',
    },
    quoteTokenSymbol: QuoteToken.BOURBON,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB',
    lpAddresses: {
      97: '',
      56: '0xE34af3b70286e67835A037B27f7715FF514B4bd8', // BNB-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    isTokenOnly: true,
    lpSymbol: 'BOURBON',
    lpAddresses: {
      97: '',
      56: '0x489B177F032c471E04eD1Dd062aAd46536DD0Ff4', // BOURBON-BUSD LP
    },
    tokenSymbol: 'BOURBON',
    tokenAddresses: {
      97: '',
      56: '0x953eFEBe00e7D573f027396f1E06231e04F7597f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    lpSymbol: 'BOURBON-BNB',
    lpAddresses: {
      97: '',
      56: '0xBadf1704650713ca9059880C90c5A5F8875E0E53', // BOURBON-BNB LP
    },
    tokenSymbol: 'BOURBON',
    tokenAddresses: {
      97: '',
      56: '0x953eFEBe00e7D573f027396f1E06231e04F7597f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'BOURBON-BUSD',
    lpAddresses: {
      97: '',
      56: '0x81274f7c77b4fED59754F7e2ADC280Aac67eAB63', // BOURBON-BUSD LP
    },
    tokenSymbol: 'BOURBON',
    tokenAddresses: {
      97: '',
      56: '0x953eFEBe00e7D573f027396f1E06231e04F7597f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },


]

export default farms