import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react"
import { useCallback } from "react";
import { getStakeToken, getStakingPoolContract, getStakingPoolContractSigner, isSupportedChain } from "../constants/contracts";
import { getReadWriteProvider } from "../constants/providers";

const useStake = () => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(
        async (poolId, amount) => {
            if (!isSupportedChain(chainId))
                return console.error("Wrong network");

            const readWriteProvider = getReadWriteProvider(walletProvider);
            const signer = await readWriteProvider.getSigner();

            const stakingPoolContract = getStakingPoolContract(signer);
            const stakeTokenContract = getStakeToken(signer);

            try {
                const transaction = await stakingPoolContract.stake(poolId, amount);
                console.log("transaction: ", transaction);
                const receipt = await transaction.wait();

                console.log("receipt: ", receipt);

                if (receipt.status) {
                    return console.log("Stake successfull");
                }

                console.log("Failed to stake");
            } catch (error) {
                console.log(error);

                console.error("error: ", error);
            }
        },
        [chainId, walletProvider]
    )

}

export default useStake;