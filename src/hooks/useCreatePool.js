import { useCallback } from "react";
import { getReadWriteProvider } from "../constants/providers";
import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import toast from "react-hot-toast";
import { ethers } from "ethers";
import { getRewardToken, getStakingPoolContract, isSupportedChain } from "../constants/contracts";

const useCreatePool = (rewardRate) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(
        async () => {
            if (!isSupportedChain(chainId))
                return console.error("Wrong network");
            const readWriteProvider = getReadWriteProvider(walletProvider);
            const signer = await readWriteProvider.getSigner();
            console.log(signer);
            console.log("hello");
            const stakingContract = getStakingPoolContract(signer);
            const rewardContract = getRewardToken(signer);
            console.log("hi");

            try {
                const loadingToast1 = toast.loading('Approving Contract spend...');
                // const txERC20Mint = await rewardContract.mint(
                //     signer.getAddress(), ethers.parseUnits("100", 18)
                //     );
                // await txERC20Mint.wait();

                const txERC20Approval = await rewardContract.approve(
                    import.meta.env.VITE_STAKING_POOL_CONTRACT_ADDRESS, ethers.parseUnits("100", 18)
                );
                await txERC20Approval.wait()
                toast.remove(loadingToast1)
                toast.success(`Contract Approved to spend!`)

                const loadingToast2 = toast.loading('Creating Pool...');
                const txCreatePool = await stakingContract.createPool(rewardRate);
                const receipt = await txCreatePool.wait();

                console.log("receipt: ", receipt);

                if (receipt.status) {
                    toast.remove(loadingToast2)
                    return toast.success(`Pool Created`)
                }

                console.log("Failed to unstake");
            } catch (error) {
                toast.remove(loadingToast1)
                toast.remove(loadingToast2)

                console.log(error);

                toast.error(error.reason)
            }
        },
        [rewardRate, chainId, walletProvider]
    );
};

export default useCreatePool;
