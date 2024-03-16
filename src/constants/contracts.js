import { ethers } from "ethers";
import stakingPoolAbi from "./stakingPool.json";
import erc20Abi from "./ERC20.json";
import { SUPPORTED_CHAIN } from "../connection/configureWeb3Modal";

export const getStakingPoolContract = (provider) =>
    new ethers.Contract(
        import.meta.env.VITE_STAKING_POOL_CONTRACT_ADDRESS,
        stakingPoolAbi,
        provider
    );

export const getStakeToken = (provider) =>
    new ethers.Contract(
        import.meta.env.VITE_STAKE_TOKEN_CONTRACT_ADDRESS,
        erc20Abi,
        provider
    );

export const getRewardToken = (provider) =>
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
