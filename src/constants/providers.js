import { ethers } from "ethers";

// Create a read-only provider
export const getJsonReadOnlyProvider = new ethers.JsonRpcProvider(
    import.meta.env.VITE_MUMBAI_JSON_RPC_URL
);

export const getWssReadOnlyProvider = new ethers.WebSocketProvider(
    import.meta.env.VITE_MUMBAI_WSS_RPC_URL
);

// Create a read-write provider
export const getReadWriteProvider = (provider) => new ethers.BrowserProvider(provider);
