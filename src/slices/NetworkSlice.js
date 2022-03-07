import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { JsonRpcProvider, StaticJsonRpcProvider } from "@ethersproject/providers";
import { error } from "./MessagesSlice";
import { setAll } from "../helpers";
import { EnvHelper } from "../helpers/Environment";
import { NodeHelper } from "../helpers/NodeHelper";
import { NETWORKS } from "../constants";
import { RootState } from "../store";


export const initializeNetwork = createAsyncThunk(
  "network/getCurrentNetwork",
  async ({ provider }, { dispatch })=> {
    try {
      let networkName;
      let uri;
      let supported = true;
      console.log()
      const id = await provider.getNetwork().then(network => network.chainId);
      console.log(id)
      switch (id) {
       
        case 97:
          networkName = "Binance Smart Chain Testnet";
          uri = EnvHelper.bscTestnetURI;
          break;  
        case 56:
          networkName = "Binance Smart Chain Mainnet";
          uri = EnvHelper.bscNetURI;
          break;      
        default:
          supported = false;
          networkName = "Unsupported Network";
          uri = "";
          dispatch(error("Please connect to a supported network!"));
          break;
      }

      return {
        networkId: id,
        networkName: networkName,
        uri: uri,
        initialized: supported,
      };
    } catch (e) {
      console.log(e);
      // dispatch(error("Error connecting to wallet!"));
      return {
        networkId: -1,
        networkName: "",
        uri: "",
        initialized: false,
      };
    }
  },
);



export const switchNetwork = createAsyncThunk(
  "network/switchNetwork",
  async ({ provider, networkId }, { dispatch }) => {
    try {
      await provider.send("wallet_switchEthereumChain", [{ chainId: idToHexString(networkId) }]);
      dispatch(initializeNetwork({ provider }));
    } catch (e) {
      // If the chain has not been added to the user's wallet
      // @ts-ignore
      if (e.code === 4902) {
        const network = NETWORKS[networkId];
        const params = [
          {
            chainId: idToHexString(networkId),
            chainName: network["chainName"],
            nativeCurrency: network["nativeCurrency"],
            rpcUrls: network["rpcUrls"],
            blockExplorerUrls: network["blockExplorerUrls"],
          },
        ];

        try {
          await provider.send("wallet_addEthereumChain", params);
          dispatch(initializeNetwork({ provider }));
        } catch (e) {
          console.log(e);
          dispatch(error("Error switching network!"));
        }
      }
      // }
    }
  },
);

const idToHexString = (id) => {
  return "0x" + id.toString(16);
};



const initialState = {
  networkId: -1,
  networkName: "",
  uri: "",
  initialized: false,
};

const networkSlice = createSlice({
  name: "network",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(initializeNetwork.pending, (state, action) => {
        state.initialized = false;
      })
      .addCase(initializeNetwork.fulfilled, (state, action) => {
        state.initialized = true;
        setAll(state, action.payload);
      })
      .addCase(initializeNetwork.rejected, (state, { error }) => {
        state.initialized = false;
        console.error(error.name, error.message, error.stack);
      });
  },
});

export default networkSlice.reducer;

const baseInfo = (state) => state.network;

export const getNetworkState = createSelector(baseInfo, network => network);
