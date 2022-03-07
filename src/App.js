import "./assets/css/plugins/bootstrap.min.css";
import 'remixicon/fonts/remixicon.css'
import "./assets/scss/style.scss";
import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
// import useSegmentAnalytics from "./hooks/useSegmentAnalytics";
import { segmentUA } from "./helpers/userAnalyticHelpers";
import { shouldTriggerSafetyCheck } from "./helpers";
import Router from "./Router/routes";
// import { useGoogleAnalytics } from "./hooks/useGoogleAnalytics";
import { initializeNetwork } from "./slices/NetworkSlice";
import { loadAccountDetails } from "./slices/AccountSlice";
import { useAppSelector } from "./hooks";
import { info } from "./slices/MessagesSlice";
import { Web3ContextProvider } from "./hooks/web3Context";
import { useAddress, useWeb3Context } from "./hooks/web3Context";
import Messages from "./components/Messages/Messages";

import store from "./store";
function App() {
  
  // useSegmentAnalytics();
  // useGoogleAnalytics();
  // const location = useLocation();

  const dispatch = useDispatch();
  // const currentPath = location.pathname + location.hash + location.search;

  const { connect, hasCachedProvider, provider, connected, chainChanged, onChainChangeComplete } = useWeb3Context();
  const address = useAddress();

  const [walletChecked, setWalletChecked] = useState(false);
  const networkId = 97;

  async function loadDetails(whichDetails) {
   
    let loadProvider = provider;

    if (whichDetails === "app") {
      loadApp(loadProvider);
    }

    if (whichDetails === "network") {
      initNetwork(loadProvider);
    }

    // don't run unless provider is a Wallet...
    if (whichDetails === "account" && address && connected) {
      console.log("loadAccount")
      // loadAccount(loadProvider);
    }
  }

  const initNetwork = useCallback(loadProvider => {
    dispatch(initializeNetwork({ provider: loadProvider }));
  }, []);

  const loadApp = useCallback(
    loadProvider => {
      console.log("changed networkId")
      // dispatch(loadAppDetails({ networkID: networkId, provider: loadProvider }));
    },
    [networkId],
  );

  // The next 3 useEffects handle initializing API Loads AFTER wallet is checked
  //
  // this useEffect checks Wallet Connection & then sets State for reload...
  // ... we don't try to fire Api Calls on initial load because web3Context is not set yet
  // ... if we don't wait we'll ALWAYS fire API calls via JsonRpc because provider has not
  // ... been reloaded within App.
  useEffect(() => {
    if (hasCachedProvider()) {
      // then user DOES have a wallet
      connect().then(() => {
        setWalletChecked(true);
      });
    } else {
      // then user DOES NOT have a wallet
      setWalletChecked(true);
    }
    if (shouldTriggerSafetyCheck()) {
      dispatch(info("Safety Check: Always verify you're on app.gamart.finance!"));
    }
  }, []);

  // this useEffect fires on state change from above. It will ALWAYS fire AFTER
  useEffect(() => {
    // don't load ANY details until wallet is Checked
    if (walletChecked) {
      loadDetails("network").then(() => {
        if (networkId !== -1) {
          loadDetails("account");
          loadDetails("app");
        }
      });
      onChainChangeComplete();
    }
  }, [walletChecked, chainChanged, networkId]);

  // this useEffect picks up any time a user Connects via the button
  useEffect(() => {
    // don't load ANY details until wallet is Connected
    if (connected && networkId !== -1) {
      // loadDetails("account");
      dispatch(loadAccountDetails({address:address}))
    }
  }, [connected, networkId]);

  return (
        <div className="App overflow-hidden">
          <Messages/>
          <Router />
        </div>
     
  );
}

export default App;
