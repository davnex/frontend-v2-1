import { Network } from '@balancer-labs/sdk';

import { PoolToken, PoolType } from '@/services/balancer/subgraph/types';

export type VotingGauge = {
  address: string;
  network: Network;
  pool: {
    id: string;
    address: string;
    poolType: PoolType;
    symbol: string;
    tokens: Pick<PoolToken, 'address' | 'weight' | 'symbol'>[];
  };
  tokenLogoURIs: Record<string, string>;
};

export const KOVAN_VOTING_GAUGES: VotingGauge[] = [
  {
    address: '0xE190E5363C925513228Bf25E4633C8cca4809C9a',
    network: Network.KOVAN,
    pool: {
      id: '0x647c1fd457b95b75d0972ff08fe01d7d7bda05df000200000000000000000001',
      address: '0x647c1FD457b95b75D0972fF08FE01d7D7bda05dF',
      poolType: PoolType.Weighted,
      symbol: 'B-50WBTC-50WETH',
      tokens: [
        {
          address: '0x1C8E3Bcb3378a443CC591f154c5CE0EBb4dA9648',
          weight: '0.5',
          symbol: 'WBTC'
        },
        {
          address: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x1C8E3Bcb3378a443CC591f154c5CE0EBb4dA9648':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0x5E7B7B41377Ce4B76d6008F7a91ff9346551c853',
    network: Network.KOVAN,
    pool: {
      id: '0xf767f0a3fcf1eafec2180b7de79d0c559d7e7e370001000000000000000003e3',
      address: '',
      poolType: PoolType.Weighted,
      symbol: '17WBTC-50BAL-33USDC',
      tokens: [
        {
          address: '0x1c8e3bcb3378a443cc591f154c5ce0ebb4da9648',
          weight: '0.1667',
          symbol: 'WBTC'
        },
        {
          address: '0x41286bb1d3e870f3f750eb7e1c25d7e48c8a1ac7',
          weight: '0.5',
          symbol: 'BAL'
        },
        {
          address: '0xc2569dd7d0fd715b054fbf16e75b001e5c0c1115',
          weight: '0.3333',
          symbol: 'USDC'
        }
      ]
    },
    tokenLogoURIs: {
      '0x1c8e3bcb3378a443cc591f154c5ce0ebb4da9648':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      '0x41286bb1d3e870f3f750eb7e1c25d7e48c8a1ac7':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png',
      '0xc2569dd7d0fd715b054fbf16e75b001e5c0c1115':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png'
    }
  },
  {
    address: '0xf34D5E5715CC6CC9493f5bD252185E8acdc1De0d',
    network: Network.KOVAN,
    pool: {
      id: '0x8fd162f338b770f7e879030830cde9173367f3010000000000000000000004d8',
      address: '0x8fd162f338B770F7E879030830cDe9173367f301',
      poolType: PoolType.StablePhantom,
      symbol: 'bb-a-USD ',
      tokens: [
        {
          address: '0x0Bbd32B14A6503EE20F87df38Cf2d5d3b59eA2F5',
          weight: 'null',
          symbol: 'bb-a-USDC'
        },
        {
          address: '0xe667D48618e71c2a02E4a1B66Ed9dEf1426938b6',
          weight: 'null',
          symbol: 'bb-a-USDT'
        },
        {
          address: '0xfCCcB77A946b6a3BD59d149F083B5BfbB8004D6D',
          weight: 'null',
          symbol: 'bb-a-DAI'
        }
      ]
    },
    tokenLogoURIs: {
      '0x0Bbd32B14A6503EE20F87df38Cf2d5d3b59eA2F5':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x9210f1204b5a24742eba12f710636d76240df3d0.png',
      '0xe667D48618e71c2a02E4a1B66Ed9dEf1426938b6':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x2bbf681cc4eb09218bee85ea2a5d3d13fa40fc0c.png',
      '0xfCCcB77A946b6a3BD59d149F083B5BfbB8004D6D':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x804cdb9116a10bb78768d3252355a1b18067bf8f.png'
    }
  }
];

export const MAINNET_VOTING_GAUGES: VotingGauge[] = [
  {
    address: '0x34f33cdaed8ba0e1ceece80e5f4a73bcf234cfac',
    network: 1,
    pool: {
      id: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063',
      address: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42',
      poolType: PoolType.Stable,
      symbol: 'staBAL3',
      tokens: [
        {
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          weight: 'null',
          symbol: 'DAI'
        },
        {
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          weight: 'null',
          symbol: 'USDC'
        },
        {
          address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          weight: 'null',
          symbol: 'USDT'
        }
      ]
    },
    tokenLogoURIs: {
      '0x6b175474e89094c44da98b954eedeac495271d0f':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      '0xdac17f958d2ee523a2206206994597c13d831ec7':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png'
    }
  },
  {
    address: '0x605ea53472a496c3d483869fe8f355c12e861e19',
    network: 1,
    pool: {
      id: '0x072f14b85add63488ddad88f855fda4a99d6ac9b000200000000000000000027',
      address: '0x072f14b85add63488ddad88f855fda4a99d6ac9b',
      poolType: PoolType.Weighted,
      symbol: 'B-50SNX-50WETH',
      tokens: [
        {
          address: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
          weight: '0.5',
          symbol: 'SNX'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0x4ca6ac0509e6381ca7cd872a6cdc0fbf00600fa1',
    network: 1,
    pool: {
      id: '0x0b09dea16768f0799065c475be02919503cb2a3500020000000000000000001a',
      address: '0x0b09dea16768f0799065c475be02919503cb2a35',
      poolType: PoolType.Weighted,
      symbol: 'B-60WETH-40DAI',
      tokens: [
        {
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          weight: '0.4',
          symbol: 'DAI'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.6',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x6b175474e89094c44da98b954eedeac495271d0f':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0x5f4d57fd9ca75625e4b7520c71c02948a48595d0',
    network: 1,
    pool: {
      id: '0x186084ff790c65088ba694df11758fae4943ee9e000200000000000000000013',
      address: '0x186084ff790c65088ba694df11758fae4943ee9e',
      poolType: PoolType.Weighted,
      symbol: 'B-50WETH-50YFI',
      tokens: [
        {
          address: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
          weight: '0.5',
          symbol: 'YFI'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0x79ef6103a513951a3b25743db509e267685726b7',
    network: 1,
    pool: {
      id: '0x1e19cf2d73a72ef1332c882f20534b6519be0276000200000000000000000112',
      address: '0x1e19cf2d73a72ef1332c882f20534b6519be0276',
      poolType: PoolType.MetaStable,
      symbol: 'B-rETH-STABLE',
      tokens: [
        {
          address: '0xae78736cd615f374d3085123a210448e74fc6393',
          weight: 'null',
          symbol: 'rETH'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: 'null',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0xae78736cd615f374d3085123a210448e74fc6393':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0xae78736cd615f374d3085123a210448e74fc6393.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0x5a481455e62d5825429c8c416f3b8d2938755b64',
    network: 1,
    pool: {
      id: '0x27c9f71cc31464b906e0006d4fcbc8900f48f15f00020000000000000000010f',
      address: '0x27c9f71cc31464b906e0006d4fcbc8900f48f15f',
      poolType: PoolType.Weighted,
      symbol: '80D2D-20USDC',
      tokens: [
        {
          address: '0x43d4a3cd90ddd2f8f4f693170c9c8098163502ad',
          weight: '0.8',
          symbol: 'D2D'
        },
        {
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          weight: '0.2',
          symbol: 'USDC'
        }
      ]
    },
    tokenLogoURIs: {
      '0x43d4a3cd90ddd2f8f4f693170c9c8098163502ad':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x43d4a3cd90ddd2f8f4f693170c9c8098163502ad.png',
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png'
    }
  },
  {
    address: '0xcd4722b7c24c29e0413bdcd9e51404b4539d14ae',
    network: 1,
    pool: {
      id: '0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080',
      address: '0x32296969ef14eb0c6d29669c550d4a0449130230',
      poolType: PoolType.MetaStable,
      symbol: 'B-stETH-STABLE',
      tokens: [
        {
          address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
          weight: 'null',
          symbol: 'wstETH'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: 'null',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0xb154d9d7f6c5d618c08d276f94239c03cfbf4575',
    network: 1,
    pool: {
      id: '0x350196326aeaa9b98f1903fb5e8fc2686f85318c000200000000000000000084',
      address: '0x350196326aeaa9b98f1903fb5e8fc2686f85318c',
      poolType: PoolType.Weighted,
      symbol: 'VBPT',
      tokens: [
        {
          address: '0x81f8f0bb1cb2a06649e51913a151f0e7ef6fa321',
          weight: '0.8',
          symbol: 'VITA'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.2',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x81f8f0bb1cb2a06649e51913a151f0e7ef6fa321':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x81f8f0bb1cB2A06649E51913A151F0E7Ef6FA321/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0xdb7d7c535b4081bb8b719237bdb7db9f23cc0b83',
    network: 1,
    pool: {
      id: '0x3e5fa9518ea95c3e533eb377c001702a9aacaa32000200000000000000000052',
      address: '0x3e5fa9518ea95c3e533eb377c001702a9aacaa32',
      poolType: PoolType.Weighted,
      symbol: 'B-50WETH-50USDT',
      tokens: [
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        },
        {
          address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          weight: '0.5',
          symbol: 'USDT'
        }
      ]
    },
    tokenLogoURIs: {
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      '0xdac17f958d2ee523a2206206994597c13d831ec7':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png'
    }
  },
  {
    address: '0xab5ea78c8323212cc5736bfe4874557bc778bfbf',
    network: 1,
    pool: {
      id: '0x4bd6d86debdb9f5413e631ad386c4427dc9d01b20002000000000000000000ec',
      address: '0x4bd6d86debdb9f5413e631ad386c4427dc9d01b2',
      poolType: PoolType.Stable,
      symbol: 'LPePyvWBTC-29APR22',
      tokens: [
        {
          address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          weight: 'null',
          symbol: 'WBTC'
        },
        {
          address: '0x49e9e169f0b661ea0a883f490564f4cc275123ed',
          weight: 'null',
          symbol: 'ePyvWBTC-29APR22'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      '0x49e9e169f0b661ea0a883f490564f4cc275123ed': ''
    }
  },
  {
    address: '0x8f4a5c19a74d7111bc0e1486640f0aab537de5a1',
    network: 1,
    pool: {
      id: '0x51735bdfbfe3fc13dea8dc6502e2e958989429610002000000000000000000a0',
      address: '0x51735bdfbfe3fc13dea8dc6502e2e95898942961',
      poolType: PoolType.Weighted,
      symbol: 'B-80UNN-20WETH',
      tokens: [
        {
          address: '0x226f7b842e0f0120b7e194d05432b3fd14773a9d',
          weight: '0.8',
          symbol: 'UNN'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.2',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x226f7b842e0f0120b7e194d05432b3fd14773a9d':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x226f7b842E0F0120b7E194D05432b3fd14773a9D/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0xd61dc7452c852b866c0ae49f4e87c38884ae231d',
    network: 1,
    pool: {
      id: '0x5d66fff62c17d841935b60df5f07f6cf79bd0f4700020000000000000000014c',
      address: '0x5d66fff62c17d841935b60df5f07f6cf79bd0f47',
      poolType: PoolType.Weighted,
      symbol: '50Silo-50WETH',
      tokens: [
        {
          address: '0x6f80310ca7f2c654691d1383149fa1a57d8ab1f8',
          weight: '0.5',
          symbol: 'Silo'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x6f80310ca7f2c654691d1383149fa1a57d8ab1f8':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x6f80310ca7f2c654691d1383149fa1a57d8ab1f8.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0xc5f8b1de80145e3a74524a3d1a772a31ed2b50cc',
    network: 1,
    pool: {
      id: '0x5f7fa48d765053f8dd85e052843e12d23e3d7bc50002000000000000000000c0',
      address: '0x5f7fa48d765053f8dd85e052843e12d23e3d7bc5',
      poolType: PoolType.Weighted,
      symbol: 'NWWP',
      tokens: [
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        },
        {
          address: '0xcfeaead4947f0705a14ec42ac3d44129e1ef3ed5',
          weight: '0.5',
          symbol: 'NOTE'
        }
      ]
    },
    tokenLogoURIs: {
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      '0xcfeaead4947f0705a14ec42ac3d44129e1ef3ed5':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0xcfeaead4947f0705a14ec42ac3d44129e1ef3ed5.png'
    }
  },
  {
    address: '0x7a89f34e976285b7b885b32b2de566389c2436a0',
    network: 1,
    pool: {
      id: '0x702605f43471183158938c1a3e5f5a359d7b31ba00020000000000000000009f',
      address: '0x702605f43471183158938c1a3e5f5a359d7b31ba',
      poolType: PoolType.Weighted,
      symbol: 'B-80BAL-20WETH',
      tokens: [
        {
          address: '0x3ec8798b81485a254928b70cda1cf0a2bb0b74d7',
          weight: '0.8',
          symbol: 'GRO'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.2',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x3ec8798b81485a254928b70cda1cf0a2bb0b74d7':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x3ec8798b81485a254928b70cda1cf0a2bb0b74d7.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0x68d019f64a7aa97e2d4e7363aee42251d08124fb',
    network: 1,
    pool: {
      id: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
      address: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2',
      poolType: PoolType.StablePhantom,
      symbol: 'bb-a-USD',
      tokens: [
        {
          address: '0x2bbf681cc4eb09218bee85ea2a5d3d13fa40fc0c',
          weight: 'null',
          symbol: 'bb-a-USDT'
        },
        {
          address: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2',
          weight: 'null',
          symbol: 'bb-a-USD'
        },
        {
          address: '0x804cdb9116a10bb78768d3252355a1b18067bf8f',
          weight: 'null',
          symbol: 'bb-a-DAI'
        },
        {
          address: '0x9210f1204b5a24742eba12f710636d76240df3d0',
          weight: 'null',
          symbol: 'bb-a-USDC'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2bbf681cc4eb09218bee85ea2a5d3d13fa40fc0c':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x2bbf681cc4eb09218bee85ea2a5d3d13fa40fc0c.png',
      '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2.png',
      '0x804cdb9116a10bb78768d3252355a1b18067bf8f':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x804cdb9116a10bb78768d3252355a1b18067bf8f.png',
      '0x9210f1204b5a24742eba12f710636d76240df3d0':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x9210f1204b5a24742eba12f710636d76240df3d0.png'
    }
  },
  {
    address: '0x78df155d6d75ca2a1b1b2027f37414ac1e7a1ed8',
    network: 1,
    pool: {
      id: '0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c0002000000000000000000c8',
      address: '0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c',
      poolType: PoolType.Stable,
      symbol: 'LPePyvUSDC-29APR22',
      tokens: [
        {
          address: '0x52c9886d5d87b0f06ebacbeff750b5ffad5d17d9',
          weight: 'null',
          symbol: 'ePyvUSDC-29APR22'
        },
        {
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          weight: 'null',
          symbol: 'USDC'
        }
      ]
    },
    tokenLogoURIs: {
      '0x52c9886d5d87b0f06ebacbeff750b5ffad5d17d9': '',
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png'
    }
  },
  {
    address: '0xc43d32bc349cea7e0fe829f53e26096c184756fa',
    network: 1,
    pool: {
      id: '0x8f4205e1604133d1875a3e771ae7e4f2b086563900020000000000000000010e',
      address: '0x8f4205e1604133d1875a3e771ae7e4f2b0865639',
      poolType: PoolType.Weighted,
      symbol: '50N/A-50N/A',
      tokens: [
        {
          address: '0x43d4a3cd90ddd2f8f4f693170c9c8098163502ad',
          weight: '0.5',
          symbol: 'D2D'
        },
        {
          address: '0xba100000625a3754423978a60c9317c58a424e3d',
          weight: '0.5',
          symbol: 'BAL'
        }
      ]
    },
    tokenLogoURIs: {
      '0x43d4a3cd90ddd2f8f4f693170c9c8098163502ad':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x43d4a3cd90ddd2f8f4f693170c9c8098163502ad.png',
      '0xba100000625a3754423978a60c9317c58a424e3d':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png'
    }
  },
  {
    address: '0x4f9463405f5bc7b4c1304222c1df76efbd81a407',
    network: 1,
    pool: {
      id: '0x90291319f1d4ea3ad4db0dd8fe9e12baf749e84500020000000000000000013c',
      address: '0x90291319f1d4ea3ad4db0dd8fe9e12baf749e845',
      poolType: PoolType.Weighted,
      symbol: 'B-30FEI-70WETH',
      tokens: [
        {
          address: '0x956f47f50a910163d8bf957cf5846d573e7f87ca',
          weight: '0.3',
          symbol: 'FEI'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.7',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x956f47f50a910163d8bf957cf5846d573e7f87ca':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x956F47F50A910163D8BF957Cf5846D573E7f87CA/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0x9ab7b0c7b154f626451c9e8a68dc04f58fb6e5ce',
    network: 1,
    pool: {
      id: '0x96646936b91d6b9d7d0c47c496afbf3d6ec7b6f8000200000000000000000019',
      address: '0x96646936b91d6b9d7d0c47c496afbf3d6ec7b6f8',
      poolType: PoolType.Weighted,
      symbol: 'B-50USDC-50WETH',
      tokens: [
        {
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          weight: '0.5',
          symbol: 'USDC'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0xe273d4acc555a245a80cb494e9e0de5cd18ed530',
    network: 1,
    pool: {
      id: '0x96ba9025311e2f47b840a1f68ed57a3df1ea8747000200000000000000000160',
      address: '0x96ba9025311e2f47b840a1f68ed57a3df1ea8747',
      poolType: PoolType.Weighted,
      symbol: '20DAI-80TCR',
      tokens: [
        {
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          weight: '0.2',
          symbol: 'DAI'
        },
        {
          address: '0x9c4a4204b79dd291d6b6571c5be8bbcd0622f050',
          weight: '0.8',
          symbol: 'TCR'
        }
      ]
    },
    tokenLogoURIs: {
      '0x6b175474e89094c44da98b954eedeac495271d0f':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      '0x9c4a4204b79dd291d6b6571c5be8bbcd0622f050':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x9c4a4204b79dd291d6b6571c5be8bbcd0622f050.png'
    }
  },
  {
    address: '0x4e311e207ceaaaed421f17e909da16527565daef',
    network: 1,
    pool: {
      id: '0xa02e4b3d18d4e6b8d18ac421fbc3dfff8933c40a00020000000000000000004b',
      address: '0xa02e4b3d18d4e6b8d18ac421fbc3dfff8933c40a',
      poolType: PoolType.Weighted,
      symbol: 'B-50MATIC-50WETH',
      tokens: [
        {
          address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
          weight: '0.5',
          symbol: 'MATIC'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0x4e3c048be671852277ad6ce29fd5207aa12fabff',
    network: 1,
    pool: {
      id: '0xa6f548df93de924d73be7d25dc02554c6bd66db500020000000000000000000e',
      address: '0xa6f548df93de924d73be7d25dc02554c6bd66db5',
      poolType: PoolType.Weighted,
      symbol: 'B-50WBTC-50WETH',
      tokens: [
        {
          address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          weight: '0.5',
          symbol: 'WBTC'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0x055d483d00b0ffe0c1123c96363889fb03fa13a4',
    network: 1,
    pool: {
      id: '0xbaeec99c90e3420ec6c1e7a769d2a856d2898e4d00020000000000000000008a',
      address: '0xbaeec99c90e3420ec6c1e7a769d2a856d2898e4d',
      poolType: PoolType.Weighted,
      symbol: 'B-50VITA-50WETH',
      tokens: [
        {
          address: '0x81f8f0bb1cb2a06649e51913a151f0e7ef6fa321',
          weight: '0.5',
          symbol: 'VITA'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x81f8f0bb1cb2a06649e51913a151f0e7ef6fa321':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x81f8f0bb1cB2A06649E51913A151F0E7Ef6FA321/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0x942cb1ed80d3ff8028b3dd726e0e2a9671bc6202',
    network: 1,
    pool: {
      id: '0xbf96189eee9357a95c7719f4f5047f76bde804e5000200000000000000000087',
      address: '0xbf96189eee9357a95c7719f4f5047f76bde804e5',
      poolType: PoolType.Weighted,
      symbol: 'B-80LDO-20WETH',
      tokens: [
        {
          address: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
          weight: '0.8',
          symbol: 'LDO'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.2',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x5a98fcbea516cf06857215779fd812ca3bef1b32':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x5a98fcbea516cf06857215779fd812ca3bef1b32.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0xbec2d02008dc64a6ad519471048cf3d3af5ca0c5',
    network: 1,
    pool: {
      id: '0xe2469f47ab58cf9cf59f9822e3c5de4950a41c49000200000000000000000089',
      address: '0xe2469f47ab58cf9cf59f9822e3c5de4950a41c49',
      poolType: PoolType.Weighted,
      symbol: 'mBPT',
      tokens: [
        {
          address: '0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2',
          weight: '0.8',
          symbol: 'MTA'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.2',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0x31e7f53d27bfb324656facaa69fe440169522e1c',
    network: 1,
    pool: {
      id: '0xe99481dc77691d8e2456e5f3f61c1810adfc1503000200000000000000000018',
      address: '0xe99481dc77691d8e2456e5f3f61c1810adfc1503',
      poolType: PoolType.Weighted,
      symbol: 'B-50LINK-50WETH',
      tokens: [
        {
          address: '0x514910771af9ca656af840dff83e8264ecf986ca',
          weight: '0.5',
          symbol: 'LINK'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x514910771af9ca656af840dff83e8264ecf986ca':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0xd6e4d70bda78fba018c2429e1b84153b9284298e',
    network: 1,
    pool: {
      id: '0xec60a5fef79a92c741cb74fdd6bfc340c0279b01000200000000000000000015',
      address: '0xec60a5fef79a92c741cb74fdd6bfc340c0279b01',
      poolType: PoolType.Weighted,
      symbol: 'B-50REN-50WETH',
      tokens: [
        {
          address: '0x408e41876cccdc0f92210600ef50372656052a38',
          weight: '0.5',
          symbol: 'REN'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x408e41876cccdc0f92210600ef50372656052a38':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x408e41876cCCDC0F92210600ef50372656052a38/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0x78259f2e946b11a0be404d29d3cc017ecdde84c6',
    network: 1,
    pool: {
      id: '0xedf085f65b4f6c155e13155502ef925c9a756003000200000000000000000123',
      address: '0xedf085f65b4f6c155e13155502ef925c9a756003',
      poolType: PoolType.Stable,
      symbol: 'LPePyvDAI-29APR22',
      tokens: [
        {
          address: '0x2c72692e94e757679289ac85d3556b2c0f717e0e',
          weight: 'null',
          symbol: 'ePyvDAI-29APR22'
        },
        {
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          weight: 'null',
          symbol: 'DAI'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2c72692e94e757679289ac85d3556b2c0f717e0e': '',
      '0x6b175474e89094c44da98b954eedeac495271d0f':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png'
    }
  },
  {
    address: '0xafc28b2412b343574e8673d4fb6b220473677602',
    network: 1,
    pool: {
      id: '0xefaa1604e82e1b3af8430b90192c1b9e8197e377000200000000000000000021',
      address: '0xefaa1604e82e1b3af8430b90192c1b9e8197e377',
      poolType: PoolType.Weighted,
      symbol: 'B-50COMP-50WETH',
      tokens: [
        {
          address: '0xc00e94cb662c3520282e6f5717214004a7f26888',
          weight: '0.5',
          symbol: 'COMP'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0xc00e94cb662c3520282e6f5717214004a7f26888':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0xcb664132622f29943f67fa56ccfd1e24cc8b4995',
    network: 1,
    pool: {
      id: '0xf4c0dd9b82da36c07605df83c8a416f11724d88b000200000000000000000026',
      address: '0xf4c0dd9b82da36c07605df83c8a416f11724d88b',
      poolType: PoolType.Weighted,
      symbol: 'B-80GNO-20WETH',
      tokens: [
        {
          address: '0x6810e776880c02933d47db1b9fc05908e5386b96',
          weight: '0.8',
          symbol: 'GNO'
        },
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.2',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x6810e776880c02933d47db1b9fc05908e5386b96':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png',
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  {
    address: '0xf4339872ad09b34a29be76ee81d4f30bcf7dbf9f',
    network: 1,
    pool: {
      id: '0xf5aaf7ee8c39b651cebf5f1f50c10631e78e0ef9000200000000000000000069',
      address: '0xf5aaf7ee8c39b651cebf5f1f50c10631e78e0ef9',
      poolType: PoolType.Weighted,
      symbol: 'BPTUMAUSDC',
      tokens: [
        {
          address: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
          weight: '0.5',
          symbol: 'UMA'
        },
        {
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          weight: '0.5',
          symbol: 'USDC'
        }
      ]
    },
    tokenLogoURIs: {
      '0x04fa0d235c4abf4bcf4787af4cf447de572ef828':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png',
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png'
    }
  },
  {
    address: '0x57d40ff4cf7441a04a05628911f57bb940b6c238',
    network: 1,
    pool: {
      id: '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc56000000000000000000000066',
      address: '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc56',
      poolType: PoolType.Stable,
      symbol: 'staBAL3-BTC',
      tokens: [
        {
          address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          weight: 'null',
          symbol: 'WBTC'
        },
        {
          address: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
          weight: 'null',
          symbol: 'renBTC'
        },
        {
          address: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
          weight: 'null',
          symbol: 'sBTC'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D/logo.png',
      '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6.png'
    }
  },
  {
    address: '0xa57453737849a4029325dfab3f6034656644e104',
    network: 1,
    pool: {
      id: '0x17ddd9646a69c9445cd8a9f921d4cd93bf50d108000200000000000000000159',
      address: '0x17ddd9646a69c9445cd8a9f921d4cd93bf50d108',
      poolType: PoolType.Weighted,
      symbol: '20WETH-80HAUS',
      tokens: [
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.2',
          symbol: 'WETH'
        },
        {
          address: '0xf2051511b9b121394fa75b8f7d4e7424337af687',
          weight: '0.8',
          symbol: 'HAUS'
        }
      ]
    },
    tokenLogoURIs: {
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      '0xf2051511b9b121394fa75b8f7d4e7424337af687':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0xf2051511b9b121394fa75b8f7d4e7424337af687.png'
    }
  },
  {
    address: '0xa6468eca7633246dcb24e5599681767d27d1f978',
    network: 1,
    pool: {
      id: '0x92762b42a06dcdddc5b7362cfb01e631c4d44b40000200000000000000000182',
      address: '0x92762b42a06dcdddc5b7362cfb01e631c4d44b40',
      poolType: PoolType.Weighted,
      symbol: '50COW-50GNO',
      tokens: [
        {
          address: '0x6810e776880c02933d47db1b9fc05908e5386b96',
          weight: '0.5',
          symbol: 'GNO'
        },
        {
          address: '0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab',
          weight: '0.5',
          symbol: 'COW'
        }
      ]
    },
    tokenLogoURIs: {
      '0x6810e776880c02933d47db1b9fc05908e5386b96':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png',
      '0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab.png'
    }
  },
  {
    address: '0x158772f59fe0d3b75805fc11139b46cbc89f70e5',
    network: 1,
    pool: {
      id: '0xde8c195aa41c11a0c4787372defbbddaa31306d2000200000000000000000181',
      address: '0xde8c195aa41c11a0c4787372defbbddaa31306d2',
      poolType: PoolType.Weighted,
      symbol: '50COW-50WETH',
      tokens: [
        {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          weight: '0.5',
          symbol: 'WETH'
        },
        {
          address: '0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab',
          weight: '0.5',
          symbol: 'COW'
        }
      ]
    },
    tokenLogoURIs: {
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      '0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab':
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab.png'
    }
  },
  {
    address: '0xc77e5645dbe48d54afc06655e39d3fe17eb76c1c',
    network: 42161,
    pool: {
      id: '0xb340b6b1a34019853cb05b2de6ee8ffd0b89a008000100000000000000000036',
      address: '0xb340b6b1a34019853cb05b2de6ee8ffd0b89a008',
      poolType: PoolType.Weighted,
      symbol: '33DPX-33RDPX-33WETH',
      tokens: [
        {
          address: '0x32eb7902d4134bf98a28b963d26de779af92a212',
          weight: '0.3333',
          symbol: 'RDPX'
        },
        {
          address: '0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55',
          weight: '0.3334',
          symbol: 'DPX'
        },
        {
          address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
          weight: '0.3333',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x32eb7902d4134bf98a28b963d26de779af92a212': '',
      '0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55': '',
      '0x82af49447d8a07e3bd95bd0d56f35241523fbab1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/logo.png'
    }
  },
  {
    address: '0x359ea8618c405023fc4b98dab1b01f373792a126',
    network: 42161,
    pool: {
      id: '0x64541216bafffeec8ea535bb71fbc927831d0595000100000000000000000002',
      address: '0x64541216bafffeec8ea535bb71fbc927831d0595',
      poolType: PoolType.Weighted,
      symbol: 'B-33WETH-33WBTC-33USDC',
      tokens: [
        {
          address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
          weight: '0.333333333333333333',
          symbol: 'WBTC'
        },
        {
          address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
          weight: '0.333333333333333334',
          symbol: 'WETH'
        },
        {
          address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
          weight: '0.333333333333333333',
          symbol: 'USDC'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f': '',
      '0x82af49447d8a07e3bd95bd0d56f35241523fbab1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/logo.png',
      '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/logo.png'
    }
  },
  {
    address: '0xb0de49429fbb80c635432bbad0b3965b28560177',
    network: 42161,
    pool: {
      id: '0x5a5884fc31948d59df2aeccca143de900d49e1a300000000000000000000006f',
      address: '0x5a5884fc31948d59df2aeccca143de900d49e1a3',
      poolType: PoolType.Stable,
      symbol: 'VST-USDC-USDT-DAI-BSP',
      tokens: [
        {
          address: '0x64343594ab9b56e99087bfa6f2335db24c2d1f17',
          weight: 'null',
          symbol: 'VST'
        },
        {
          address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
          weight: 'null',
          symbol: 'DAI'
        },
        {
          address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
          weight: 'null',
          symbol: 'USDT'
        },
        {
          address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
          weight: 'null',
          symbol: 'USDC'
        }
      ]
    },
    tokenLogoURIs: {
      '0x64343594ab9b56e99087bfa6f2335db24c2d1f17': '',
      '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1/logo.png',
      '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/logo.png',
      '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/logo.png'
    }
  },
  {
    address: '0x785f08fb77ec934c01736e30546f87b4daccbe50',
    network: 42161,
    pool: {
      id: '0x1779900c7707885720d39aa741f4086886307e9e00020000000000000000004b',
      address: '0x1779900c7707885720d39aa741f4086886307e9e',
      poolType: PoolType.Weighted,
      symbol: '80MAGIC-20WETH',
      tokens: [
        {
          address: '0x539bde0d7dbd336b79148aa742883198bbf60342',
          weight: '0.8',
          symbol: 'MAGIC'
        },
        {
          address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
          weight: '0.2',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x539bde0d7dbd336b79148aa742883198bbf60342': '',
      '0x82af49447d8a07e3bd95bd0d56f35241523fbab1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/logo.png'
    }
  },
  {
    address: '0x899f737750db562b88c1e412ee1902980d3a4844',
    network: 42161,
    pool: {
      id: '0xc2f082d33b5b8ef3a7e3de30da54efd3114512ac000200000000000000000017',
      address: '0xc2f082d33b5b8ef3a7e3de30da54efd3114512ac',
      poolType: PoolType.Weighted,
      symbol: 'B-80PICKLE-20WETH',
      tokens: [
        {
          address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
          weight: '0.2',
          symbol: 'WETH'
        },
        {
          address: '0x965772e0e9c84b6f359c8597c891108dcf1c5b1a',
          weight: '0.8',
          symbol: 'PICKLE'
        }
      ]
    },
    tokenLogoURIs: {
      '0x82af49447d8a07e3bd95bd0d56f35241523fbab1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/logo.png',
      '0x965772e0e9c84b6f359c8597c891108dcf1c5b1a': ''
    }
  },
  {
    address: '0x435272180a4125f3b47c92826f482fc6cc165958',
    network: 42161,
    pool: {
      id: '0x651e00ffd5ecfa7f3d4f33d62ede0a97cf62ede2000200000000000000000006',
      address: '0x651e00ffd5ecfa7f3d4f33d62ede0a97cf62ede2',
      poolType: PoolType.Weighted,
      symbol: 'B-80LINK-20WETH',
      tokens: [
        {
          address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
          weight: '0.2',
          symbol: 'WETH'
        },
        {
          address: '0xf97f4df75117a78c1a5a0dbb814af92458539fb4',
          weight: '0.8',
          symbol: 'LINK'
        }
      ]
    },
    tokenLogoURIs: {
      '0x82af49447d8a07e3bd95bd0d56f35241523fbab1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/logo.png',
      '0xf97f4df75117a78c1a5a0dbb814af92458539fb4': ''
    }
  },
  {
    address: '0x3fdb6fb126521a28f06893f9629da12f7b7266eb',
    network: 42161,
    pool: {
      id: '0x0adeb25cb5920d4f7447af4a0428072edc2cee2200020000000000000000004a',
      address: '0x0adeb25cb5920d4f7447af4a0428072edc2cee22',
      poolType: PoolType.Weighted,
      symbol: '80GMX-20WETH',
      tokens: [
        {
          address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
          weight: '0.2',
          symbol: 'WETH'
        },
        {
          address: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
          weight: '0.8',
          symbol: 'GMX'
        }
      ]
    },
    tokenLogoURIs: {
      '0x82af49447d8a07e3bd95bd0d56f35241523fbab1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/logo.png',
      '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a/logo.png'
    }
  },
  {
    address: '0xf0ea3559cf098455921d74173da83ff2f6979495',
    network: 42161,
    pool: {
      id: '0x0510ccf9eb3ab03c1508d3b9769e8ee2cfd6fdcf00000000000000000000005d',
      address: '0x0510ccf9eb3ab03c1508d3b9769e8ee2cfd6fdcf',
      poolType: PoolType.Stable,
      symbol: 'MAI-BSP',
      tokens: [
        {
          address: '0x3f56e0c36d275367b8c502090edf38289b3dea0d',
          weight: 'null',
          symbol: 'MAI'
        },
        {
          address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
          weight: 'null',
          symbol: 'USDT'
        },
        {
          address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
          weight: 'null',
          symbol: 'USDC'
        }
      ]
    },
    tokenLogoURIs: {
      '0x3f56e0c36d275367b8c502090edf38289b3dea0d': '',
      '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/logo.png',
      '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/logo.png'
    }
  },
  {
    address: '0x6cb1a77ab2e54d4560fda893e9c738ad770da0b0',
    network: 42161,
    pool: {
      id: '0xc61ff48f94d801c1ceface0289085197b5ec44f000020000000000000000004d',
      address: '0xc61ff48f94d801c1ceface0289085197b5ec44f0',
      poolType: PoolType.Weighted,
      symbol: '50VSTA-50WETH',
      tokens: [
        {
          address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
          weight: '0.5',
          symbol: 'WETH'
        },
        {
          address: '0xa684cd057951541187f288294a1e1c2646aa2d24',
          weight: '0.5',
          symbol: 'VSTA'
        }
      ]
    },
    tokenLogoURIs: {
      '0x82af49447d8a07e3bd95bd0d56f35241523fbab1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/logo.png',
      '0xa684cd057951541187f288294a1e1c2646aa2d24': ''
    }
  },
  {
    address: '0x05e7732bf9ae5592e6aa05afe8cd80f7ab0a7bea',
    network: 42161,
    pool: {
      id: '0xb28670b3e7ad27bd41fb5938136bf9e9cba90d6500020000000000000000001e',
      address: '0xb28670b3e7ad27bd41fb5938136bf9e9cba90d65',
      poolType: PoolType.Weighted,
      symbol: 'B-80TCR-20WETH',
      tokens: [
        {
          address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
          weight: '0.2',
          symbol: 'WETH'
        },
        {
          address: '0xa72159fc390f0e3c6d415e658264c7c4051e9b87',
          weight: '0.8',
          symbol: 'TCR'
        }
      ]
    },
    tokenLogoURIs: {
      '0x82af49447d8a07e3bd95bd0d56f35241523fbab1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/logo.png',
      '0xa72159fc390f0e3c6d415e658264c7c4051e9b87': ''
    }
  },
  {
    address: '0xe0b50b0635b90f7021d2618f76ab9a31b92d0094',
    network: 42161,
    pool: {
      id: '0x1533a3278f3f9141d5f820a184ea4b017fce2382000000000000000000000016',
      address: '0x1533a3278f3f9141d5f820a184ea4b017fce2382',
      poolType: PoolType.Stable,
      symbol: 'B-staBAL-3',
      tokens: [
        {
          address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
          weight: 'null',
          symbol: 'DAI'
        },
        {
          address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
          weight: 'null',
          symbol: 'USDT'
        },
        {
          address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
          weight: 'null',
          symbol: 'USDC'
        }
      ]
    },
    tokenLogoURIs: {
      '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1/logo.png',
      '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/logo.png',
      '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/logo.png'
    }
  },
  {
    address: '0x981fb05b738e981ac532a99e77170ecb4bc27aef',
    network: 42161,
    pool: {
      id: '0x4a3a22a3e7fee0ffbb66f1c28bfac50f75546fc7000200000000000000000008',
      address: '0x4a3a22a3e7fee0ffbb66f1c28bfac50f75546fc7',
      poolType: PoolType.Weighted,
      symbol: 'B-80GNO-20WETH',
      tokens: [
        {
          address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
          weight: '0.2',
          symbol: 'WETH'
        },
        {
          address: '0xa0b862f60edef4452f25b4160f177db44deb6cf1',
          weight: '0.8',
          symbol: 'GNO'
        }
      ]
    },
    tokenLogoURIs: {
      '0x82af49447d8a07e3bd95bd0d56f35241523fbab1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/logo.png',
      '0xa0b862f60edef4452f25b4160f177db44deb6cf1': ''
    }
  },
  {
    address: '0xf30db0ca4605e5115df91b56bd299564dca02666',
    network: 42161,
    pool: {
      id: '0xb5b77f1ad2b520df01612399258e7787af63025d000200000000000000000010',
      address: '0xb5b77f1ad2b520df01612399258e7787af63025d',
      poolType: PoolType.Weighted,
      symbol: 'MWP',
      tokens: [
        {
          address: '0x4e352cf164e64adcbad318c3a1e222e9eba4ce42',
          weight: '0.6',
          symbol: 'MCB'
        },
        {
          address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
          weight: '0.4',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x4e352cf164e64adcbad318c3a1e222e9eba4ce42': '',
      '0x82af49447d8a07e3bd95bd0d56f35241523fbab1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/logo.png'
    }
  },
  {
    address: '0x6823dca6d70061f2ae2aaa21661795a2294812bf',
    network: 42161,
    pool: {
      id: '0xcc65a812ce382ab909a11e434dbf75b34f1cc59d000200000000000000000001',
      address: '0xcc65a812ce382ab909a11e434dbf75b34f1cc59d',
      poolType: PoolType.Weighted,
      symbol: 'B-60BAL-40WETH',
      tokens: [
        {
          address: '0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8',
          weight: '0.6',
          symbol: 'BAL'
        },
        {
          address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
          weight: '0.4',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8': '',
      '0x82af49447d8a07e3bd95bd0d56f35241523fbab1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/logo.png'
    }
  },
  {
    address: '0xa5a0b6598b90d214eaf4d7a6b72d5a89c3b9a72c',
    network: 137,
    pool: {
      id: '0x0297e37f1873d2dab4487aa67cd56b58e2f27875000100000000000000000002',
      address: '0x0297e37f1873d2dab4487aa67cd56b58e2f27875',
      poolType: PoolType.Weighted,
      symbol: 'B-POLYBASE',
      tokens: [
        {
          address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
          weight: '0.25',
          symbol: 'WMATIC'
        },
        {
          address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          weight: '0.25',
          symbol: 'USDC'
        },
        {
          address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
          weight: '0.25',
          symbol: 'WETH'
        },
        {
          address: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
          weight: '0.25',
          symbol: 'BAL'
        }
      ]
    },
    tokenLogoURIs: {
      '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png',
      '0x2791bca1f2de4661ed88a30c99a7a9449aa84174':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png',
      '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png',
      '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3': ''
    }
  },
  {
    address: '0x88d07558470484c03d3bb44c3ecc36cafcf43253',
    network: 137,
    pool: {
      id: '0x03cd191f589d12b0582a99808cf19851e468e6b500010000000000000000000a',
      address: '0x03cd191f589d12b0582a99808cf19851e468e6b5',
      poolType: PoolType.Weighted,
      symbol: 'BPTC',
      tokens: [
        {
          address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
          weight: '0.333333333333333333',
          symbol: 'WBTC'
        },
        {
          address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          weight: '0.333333333333333333',
          symbol: 'USDC'
        },
        {
          address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
          weight: '0.333333333333333334',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6': '',
      '0x2791bca1f2de4661ed88a30c99a7a9449aa84174':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png',
      '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png'
    }
  },
  {
    address: '0xc6fb8c72d3bd24fc4891c51c2cb3a13f49c11335',
    network: 137,
    pool: {
      id: '0x186084ff790c65088ba694df11758fae4943ee9e000200000000000000000032',
      address: '0x186084ff790c65088ba694df11758fae4943ee9e',
      poolType: PoolType.Weighted,
      symbol: 'TELX-50TEL-50BAL',
      tokens: [
        {
          address: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
          weight: '0.5',
          symbol: 'BAL'
        },
        {
          address: '0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32',
          weight: '0.5',
          symbol: 'TEL'
        }
      ]
    },
    tokenLogoURIs: {
      '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3': '',
      '0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32/logo.png'
    }
  },
  {
    address: '0xe32080a12723e5b8f1b0ced1f308fe2f9cf7e3c9',
    network: 137,
    pool: {
      id: '0x614b5038611729ed49e0ded154d8a5d3af9d1d9e00010000000000000000001d',
      address: '0x614b5038611729ed49e0ded154d8a5d3af9d1d9e',
      poolType: PoolType.Weighted,
      symbol: 'BP-MTA',
      tokens: [
        {
          address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
          weight: '0.4',
          symbol: 'WMATIC'
        },
        {
          address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
          weight: '0.2',
          symbol: 'WETH'
        },
        {
          address: '0xf501dd45a1198c2e1b5aef5314a68b9006d842e0',
          weight: '0.4',
          symbol: 'MTA'
        }
      ]
    },
    tokenLogoURIs: {
      '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png',
      '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png',
      '0xf501dd45a1198c2e1b5aef5314a68b9006d842e0': ''
    }
  },
  {
    address: '0xcbbd866835433c620059129aaf12ee9c59dbc0d7',
    network: 137,
    pool: {
      id: '0x7c9cf12d783821d5c63d8e9427af5c44bad92445000100000000000000000051',
      address: '0x7c9cf12d783821d5c63d8e9427af5c44bad92445',
      poolType: PoolType.Weighted,
      symbol: 'B-33AVAX-33WETH-33SOL',
      tokens: [
        {
          address: '0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b',
          weight: '0.333333333333333333',
          symbol: 'AVAX'
        },
        {
          address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
          weight: '0.333333333333333333',
          symbol: 'WETH'
        },
        {
          address: '0x7dff46370e9ea5f0bad3c4e29711ad50062ea7a4',
          weight: '0.333333333333333334',
          symbol: 'SOL'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b': '',
      '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png',
      '0x7dff46370e9ea5f0bad3c4e29711ad50062ea7a4': ''
    }
  },
  {
    address: '0xa6359eb485d23412eb40f1f0dbd80e1a4fe87e6b',
    network: 137,
    pool: {
      id: '0xc31a37105b94ab4efca1954a14f059af11fcd9bb000000000000000000000455',
      address: '0xc31a37105b94ab4efca1954a14f059af11fcd9bb',
      poolType: PoolType.Stable,
      symbol: 'FRAX-UST-USDC-USDT-BSP',
      tokens: [
        {
          address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          weight: 'null',
          symbol: 'USDC'
        },
        {
          address: '0x45c32fa6df82ead1e2ef74d17b76547eddfaff89',
          weight: 'null',
          symbol: 'FRAX'
        },
        {
          address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
          weight: 'null',
          symbol: 'USDT'
        },
        {
          address: '0xe6469ba6d2fd6130788e0ea9c0a0515900563b59',
          weight: 'null',
          symbol: 'UST'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2791bca1f2de4661ed88a30c99a7a9449aa84174':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png',
      '0x45c32fa6df82ead1e2ef74d17b76547eddfaff89': '',
      '0xc2132d05d31c914a87c6611c10748aeb04b58e8f':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0xc2132D05D31c914a87C6611C10748AEb04B58e8F/logo.png',
      '0xe6469ba6d2fd6130788e0ea9c0a0515900563b59':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0xE6469Ba6D2fD6130788E0eA9C0a0515900563b59/logo.png'
    }
  },
  {
    address: '0xb5ad7d6d6f92a77f47f98c28c84893fbccc94809',
    network: 137,
    pool: {
      id: '0x0d34e5dd4d8f043557145598e4e2dc286b35fd4f000000000000000000000068',
      address: '0x0d34e5dd4d8f043557145598e4e2dc286b35fd4f',
      poolType: PoolType.Stable,
      symbol: 'BPSP-TUSD',
      tokens: [
        {
          address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          weight: 'null',
          symbol: 'USDC'
        },
        {
          address: '0x2e1ad108ff1d8c782fcbbb89aad783ac49586756',
          weight: 'null',
          symbol: 'TUSD'
        },
        {
          address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
          weight: 'null',
          symbol: 'DAI'
        },
        {
          address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
          weight: 'null',
          symbol: 'USDT'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2791bca1f2de4661ed88a30c99a7a9449aa84174':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png',
      '0x2e1ad108ff1d8c782fcbbb89aad783ac49586756': '',
      '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063/logo.png',
      '0xc2132d05d31c914a87c6611c10748aeb04b58e8f':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0xc2132D05D31c914a87C6611C10748AEb04B58e8F/logo.png'
    }
  },
  {
    address: '0xfbf87d2c22d1d298298ab5b0ec957583a2731d15',
    network: 137,
    pool: {
      id: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000012',
      address: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42',
      poolType: PoolType.Stable,
      symbol: 'BPSP',
      tokens: [
        {
          address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          weight: 'null',
          symbol: 'USDC'
        },
        {
          address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
          weight: 'null',
          symbol: 'DAI'
        },
        {
          address: '0xa3fa99a148fa48d14ed51d610c367c61876997f1',
          weight: 'null',
          symbol: 'miMATIC'
        },
        {
          address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
          weight: 'null',
          symbol: 'USDT'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2791bca1f2de4661ed88a30c99a7a9449aa84174':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png',
      '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063/logo.png',
      '0xa3fa99a148fa48d14ed51d610c367c61876997f1':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0xa3Fa99A148fA48D14Ed51d610c367C61876997F1/logo.png',
      '0xc2132d05d31c914a87c6611c10748aeb04b58e8f':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0xc2132D05D31c914a87C6611C10748AEb04B58e8F/logo.png'
    }
  },
  {
    address: '0xc3bb46b8196c3f188c6a373a6c4fde792ca78653',
    network: 137,
    pool: {
      id: '0xaf5e0b5425de1f5a630a8cb5aa9d97b8141c908d000200000000000000000366',
      address: '0xaf5e0b5425de1f5a630a8cb5aa9d97b8141c908d',
      poolType: PoolType.MetaStable,
      symbol: 'B-stMATIC-STABLE',
      tokens: [
        {
          address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
          weight: 'null',
          symbol: 'WMATIC'
        },
        {
          address: '0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4',
          weight: 'null',
          symbol: 'stMATIC'
        }
      ]
    },
    tokenLogoURIs: {
      '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png',
      '0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4': ''
    }
  },
  {
    address: '0xd27cb689083e97847dc91c64efc91c4445d46d47',
    network: 137,
    pool: {
      id: '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc5600020000000000000000001e',
      address: '0xfeadd389a5c427952d8fdb8057d6c8ba1156cc56',
      poolType: PoolType.Stable,
      symbol: 'BP-BTC-SP',
      tokens: [
        {
          address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
          weight: 'null',
          symbol: 'WBTC'
        },
        {
          address: '0xdbf31df14b66535af65aac99c32e9ea844e14501',
          weight: 'null',
          symbol: 'renBTC'
        }
      ]
    },
    tokenLogoURIs: {
      '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6': '',
      '0xdbf31df14b66535af65aac99c32e9ea844e14501': ''
    }
  },
  {
    address: '0x211c27a32e686659566c3cee6035c2343d823aab',
    network: 137,
    pool: {
      id: '0xcf354603a9aebd2ff9f33e1b04246d8ea204ae9500020000000000000000005a',
      address: '0xcf354603a9aebd2ff9f33e1b04246d8ea204ae95',
      poolType: PoolType.Weighted,
      symbol: 'B-50WBTC-50WETH',
      tokens: [
        {
          address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
          weight: '0.5',
          symbol: 'WBTC'
        },
        {
          address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6': '',
      '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png'
    }
  },
  {
    address: '0x022a843ffee5a6fe1646c980b94286ef0d05f759',
    network: 137,
    pool: {
      id: '0x5a6ae1fd70d04ba4a279fc219dfabc53825cb01d00020000000000000000020e',
      address: '0x5a6ae1fd70d04ba4a279fc219dfabc53825cb01d',
      poolType: PoolType.Weighted,
      symbol: '20WETH-80BANK',
      tokens: [
        {
          address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
          weight: '0.2',
          symbol: 'WETH'
        },
        {
          address: '0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab',
          weight: '0.8',
          symbol: 'BANK'
        }
      ]
    },
    tokenLogoURIs: {
      '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png',
      '0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab': ''
    }
  },
  {
    address: '0xdae03cd2ec908710e98ffc5f4ff540fe2c5c1e17',
    network: 137,
    pool: {
      id: '0xea4e073c8ac859f2994c07e627178719c8002dc00002000000000000000003dc',
      address: '0xea4e073c8ac859f2994c07e627178719c8002dc0',
      poolType: PoolType.Weighted,
      symbol: '20WMATIC-80SAND',
      tokens: [
        {
          address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
          weight: '0.2',
          symbol: 'WMATIC'
        },
        {
          address: '0xbbba073c31bf03b8acf7c28ef0738decf3695683',
          weight: '0.8',
          symbol: 'SAND'
        }
      ]
    },
    tokenLogoURIs: {
      '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png',
      '0xbbba073c31bf03b8acf7c28ef0738decf3695683': ''
    }
  },
  {
    address: '0x45012035a728b0a9b344036e6bff6c775ee09769',
    network: 137,
    pool: {
      id: '0x10f21c9bd8128a29aa785ab2de0d044dcdd79436000200000000000000000059',
      address: '0x10f21c9bd8128a29aa785ab2de0d044dcdd79436',
      poolType: PoolType.Weighted,
      symbol: 'B-50WETH-50USDC',
      tokens: [
        {
          address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          weight: '0.5',
          symbol: 'USDC'
        },
        {
          address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
          weight: '0.5',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2791bca1f2de4661ed88a30c99a7a9449aa84174':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png',
      '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png'
    }
  },
  {
    address: '0x5a3970e3145bbba4838d1a3a31c79bcd35a16a9e',
    network: 137,
    pool: {
      id: '0x36128d5436d2d70cab39c9af9cce146c38554ff0000100000000000000000008',
      address: '0x36128d5436d2d70cab39c9af9cce146c38554ff0',
      poolType: PoolType.Weighted,
      symbol: 'B-POLYDEFI',
      tokens: [
        {
          address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          weight: '0.2',
          symbol: 'USDC'
        },
        {
          address: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
          weight: '0.2',
          symbol: 'LINK'
        },
        {
          address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
          weight: '0.2',
          symbol: 'WETH'
        },
        {
          address: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
          weight: '0.2',
          symbol: 'BAL'
        },
        {
          address: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
          weight: '0.2',
          symbol: 'AAVE'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2791bca1f2de4661ed88a30c99a7a9449aa84174':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png',
      '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39/logo.png',
      '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png',
      '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3': '',
      '0xd6df932a45c0f255f85145f286ea0b292b21c90b':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0xD6DF932A45C0f255f85145f286eA0b292B21C90B/logo.png'
    }
  },
  {
    address: '0xab6efd2882bb25c732bf0a5f8d98be752f0ddaaf',
    network: 137,
    pool: {
      id: '0x805ca3ccc61cc231851dee2da6aabff0a7714aa7000200000000000000000361',
      address: '0x805ca3ccc61cc231851dee2da6aabff0a7714aa7',
      poolType: PoolType.Weighted,
      symbol: 'BAL-VISION-LP',
      tokens: [
        {
          address: '0x034b2090b579228482520c589dbd397c53fc51cc',
          weight: '0.8',
          symbol: 'VISION'
        },
        {
          address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
          weight: '0.2',
          symbol: 'WETH'
        }
      ]
    },
    tokenLogoURIs: {
      '0x034b2090b579228482520c589dbd397c53fc51cc': '',
      '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png'
    }
  },
  {
    address: '0x6d73df7afc4e0144dec3be083dfa3882e53c5ba5',
    network: 137,
    pool: {
      id: '0xb204bf10bc3a5435017d3db247f56da601dfe08a0002000000000000000000fe',
      address: '0xb204bf10bc3a5435017d3db247f56da601dfe08a',
      poolType: PoolType.Weighted,
      symbol: '20USDC-80THX',
      tokens: [
        {
          address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          weight: '0.2',
          symbol: 'USDC'
        },
        {
          address: '0x2934b36ca9a4b31e633c5be670c8c8b28b6aa015',
          weight: '0.8',
          symbol: 'THX'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2791bca1f2de4661ed88a30c99a7a9449aa84174':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png',
      '0x2934b36ca9a4b31e633c5be670c8c8b28b6aa015': ''
    }
  },
  {
    address: '0x397649ff00de6d90578144103768aaa929ef683d',
    network: 137,
    pool: {
      id: '0xdb1db6e248d7bb4175f6e5a382d0a03fe3dcc813000100000000000000000035',
      address: '0xdb1db6e248d7bb4175f6e5a382d0a03fe3dcc813',
      poolType: PoolType.Weighted,
      symbol: 'TELX-60TEL-20BAL-20USDC',
      tokens: [
        {
          address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          weight: '0.2',
          symbol: 'USDC'
        },
        {
          address: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
          weight: '0.2',
          symbol: 'BAL'
        },
        {
          address: '0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32',
          weight: '0.6',
          symbol: 'TEL'
        }
      ]
    },
    tokenLogoURIs: {
      '0x2791bca1f2de4661ed88a30c99a7a9449aa84174':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png',
      '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3': '',
      '0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32/logo.png'
    }
  },
  {
    address: '0xa80d514734e57691f45af76bb44d1202858fd1f0',
    network: 137,
    pool: {
      id: '0xce66904b68f1f070332cbc631de7ee98b650b499000100000000000000000009',
      address: '0xce66904b68f1f070332cbc631de7ee98b650b499',
      poolType: PoolType.Weighted,
      symbol: 'B-POLYDEFI',
      tokens: [
        {
          address: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
          weight: '0.25',
          symbol: 'LINK'
        },
        {
          address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
          weight: '0.25',
          symbol: 'WETH'
        },
        {
          address: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
          weight: '0.25',
          symbol: 'BAL'
        },
        {
          address: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
          weight: '0.25',
          symbol: 'AAVE'
        }
      ]
    },
    tokenLogoURIs: {
      '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39/logo.png',
      '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png',
      '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3': '',
      '0xd6df932a45c0f255f85145f286ea0b292b21c90b':
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0xD6DF932A45C0f255f85145f286eA0b292B21C90B/logo.png'
    }
  }
];
