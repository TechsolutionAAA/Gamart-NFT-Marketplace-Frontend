import { NodeHelper } from "./helpers/NodeHelper";
import { EnvHelper } from "./helpers/Environment";

export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/defi-protocol-metrics";
export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14;

export const TOKEN_DECIMALS = 9;
export const SERVER_URL = "http://65.1.1.237";
//  export const SERVER_URL = "http://localhost:5432";

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};


export const addresses = {
  97: {
    NFT_ADDRESS: "0xb0fd14b2e7a0613217263bd91823981e055ca273",
    TOKEN_ADDRESS: "0xffe7dc30467FA5e2D6775c325Fe39Da43F0c18Ab", // duplicate
    MARKET_ADDRESS: "0x74A224D394Fb8580a1636dd2D2b5f17c4674571e",
    
    STAKING_ADDRESS: "0xE8a46747910be8dbC65fe6A0916E9D6b1e290E23",
    STAKING_HELPER_ADDRESS: "0x6758eECbeC08D965d484A0faE53E0ec24e1282b6",
    // OLD_STAKING_ADDRESS: "0x6758eECbeC08D965d484A0faE53E0ec24e1282b6",
    sD3_ADDRESS: "0xfB6Cb6b42e0621520B08a7A1f79Cdf07618a9CD8",
    DISTRIBUTOR_ADDRESS: "0x4b3763061Ee2dB1F1357ec52440369C202EF98E2",
    BONDINGCALC_ADDRESS: "0x4B5654E3352f692300dDCf532d3eAe1f7b91ac37",
    TREASURY_ADDRESS: "0x70DbA5Fe0fc0a481763Dce33a048609EeDBea52c",

    CIRCULATING_SUPPLY_ADDRESS: "0x3F68784370159c26974bed44533A3dAE1DBc92Fb",
    BOND_HELPER: "0x8a1C08cf83e7291C98d7ce0957F8a0e766F892B8",
    WSOHM_ADDRESS: "0xe73384f11Bb748Aa0Bc20f7b02958DF573e6E2ad",
    REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    GOHM_ADDRESS: "0xcF2D6893A1CB459fD6B48dC9C41c6110B968611E",
  },
  56: {
    NFT_ADDRESS: "0xb0fd14b2e7a0613217263bd91823981e055ca273",
    TOKEN_ADDRESS: "0xffe7dc30467FA5e2D6775c325Fe39Da43F0c18Ab", // duplicate
    D3_ADDRESS: "0xa973Eb1eD9f901eEA1268e3f4f2e0c92b137C5A4",
    STAKING_ADDRESS: "0x0EB13A9B89F0699c02ddCEe11eA101E6a6DaD8D7",
    STAKING_HELPER_ADDRESS: "0x8f4d662Ed9Fe02cB52bc1f15E06C4D83DAFc4002",
    // OLD_STAKING_ADDRESS: "0x6758eECbeC08D965d484A0faE53E0ec24e1282b6",
    sD3_ADDRESS: "0x50A9c160DA1BD127f9177C076C89F835EC39080e",
    DISTRIBUTOR_ADDRESS: "0xA0A94AB6E6AF159de57d9e13f803EbD1B413077b",
    BONDINGCALC_ADDRESS: "0x583652138FD6aBaa6c56340B55177Dcd585D12F4",
    TREASURY_ADDRESS: "0x5ddE37a27398a6dC04327bEb057DD09B9136D2D2",
    DIVIDEND_ADDRESS: "0x036454992815f8DEf1d764f0Ff654f6a492D2A1a",
    CIRCULATING_SUPPLY_ADDRESS: "0x3F68784370159c26974bed44533A3dAE1DBc92Fb",
    BOND_HELPER: "0x8a1C08cf83e7291C98d7ce0957F8a0e766F892B8",
    WSOHM_ADDRESS: "0xd757B746B34512E885CaB18a183fC0916070E5c7",
    REDEEM_HELPER_ADDRESS: "0xF8c15F3B6A25e7D2d3F6e25d7293FECF1B2beB53",
    GOHM_ADDRESS: "0xcF2D6893A1CB459fD6B48dC9C41c6110B968611E",
  },
};


// These networks will be available for users to select. Other networks may be functional
// (e.g. testnets, or mainnets being prepared for launch) but need to be selected directly via the wallet.
export const USER_SELECTABLE_NETWORKS = [1, 42161, 43114];

// Set this to the chain number of the most recently added network in order to enable the 'Now supporting X network'
// message in the UI. Set to -1 if we don't want to display the message at the current time.
export const NEWEST_NETWORK_ID = 43114;

export const NETWORKS = {
  56: {
    chainName: "Binance Smart Chain Mainnet",
    chainId: 56,
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed1.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com/"],
    imageAltText: "Avalanche Logo",
    uri: () => EnvHelper.bscNetURI,
  },
  97: {
    chainName: "Binance Smart Chain Testnet",
    chainId: 97,
    nativeCurrency: {
      name: "TBNB",
      symbol: "TBNB",
      decimals: 18,
    },
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    blockExplorerUrls: ["https://testnet.bscscan.com/"],
    imageAltText: "Avalanche Logo",
    uri: () => EnvHelper.bscTestnetURI,
  },
};

// VIEWS FOR NETWORK is used to denote which paths should be viewable on each network
// ... attempting to prevent contract calls that can't complete & prevent user's from getting
// ... stuck on the wrong view


export const VIEWS_FOR_NETWORK= {
  97: {
    dashboard: true,
    stake: true,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: true,
    network: true,
  },
  56: {
    dashboard: true,
    stake: true,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: true,
    network: true,
  },

};
