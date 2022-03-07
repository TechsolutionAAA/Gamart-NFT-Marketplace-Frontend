import { useState, useEffect } from "react";
import { History } from "history";
import { VIEWS_FOR_NETWORK } from "../constants";

/**
 * will redirect from paths that aren't active on a given network yet.
 */
export function usePathForNetwork({
  pathName,
  networkID,
  history,
}) {
  const handlePathForNetwork = () => {
    // do nothing if networkID is -1 since that's a default state
    if (networkID === -1) return;

    switch (pathName) {
      case "stake":
        if (VIEWS_FOR_NETWORK[networkID] && VIEWS_FOR_NETWORK[networkID].stake) {
          break;
        } else {
          history.push("/dashboard");
          break;
        }
      case "bonds":
        if (VIEWS_FOR_NETWORK[networkID] && VIEWS_FOR_NETWORK[networkID].bonds) {
          break;
        } else {
          history.push("/dashboard");
          break;
        }
      case "33-t":
        if (VIEWS_FOR_NETWORK[networkID] && VIEWS_FOR_NETWORK[networkID].threeTogether) {
          break;
        } else {
          history.push("/dashboard");
          break;
        }
      case "zap":
        if (VIEWS_FOR_NETWORK[networkID] && VIEWS_FOR_NETWORK[networkID].zap) {
          break;
        } else {
          history.push("/dashboard");
          break;
        }
      default:
        console.log("pathForNetwork ok");
    }
  };

  useEffect(() => {
    handlePathForNetwork();
  }, [networkID]);
}
