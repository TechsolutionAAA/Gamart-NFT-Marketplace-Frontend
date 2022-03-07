// export { default as useDebounce } from "./Debounce";

import { useDispatch, useSelector } from "react-redux";

export { useWeb3Context, useAddress } from "./web3Context";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
