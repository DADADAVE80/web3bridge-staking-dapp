import { ethers } from "ethers";
import stakingPoolAbi from "./Staking.json";
import erc20Abi from "./ERC20.json";
import { SUPPORTED_CHAIN } from "../connection/configureWeb3Modal";

export const getStakingPoolContract = (provider) =>
    new ethers.Contract(
        import.meta.env.VITE_STAKING_POOL_CONTRACT_ADDRESS,
        stakingPoolAbi,
        provider
    );

export const getStakeTokens = (provider) =>
    new ethers.Contract(
        import.meta.env.VITE_STAKE_TOKEN_CONTRACT_ADDRESS,
        erc20Abi,
        provider
    );

export const getRewardTokens = (provider) =>
    new ethers.Contract(
        import.meta.env.VITE_REWARD_TOKEN_CONTRACT_ADDRESS,
        erc20Abi,
        provider
    );

export const isSupportedChain = (chainId) =>
    Number(chainId) === SUPPORTED_CHAIN;

export const getStakingPoolContractSigner = async (provider) => {
    const signer = await provider.getSigner();
    return getStakingPoolContract(signer);
};
