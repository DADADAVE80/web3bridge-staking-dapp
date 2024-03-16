import { useWeb3ModalProvider } from "@web3modal/ethers/react"
import { useCallback } from "react";
import { getStakingPoolContract, getStakingPoolContractSigner, isSupportedChain } from "../constants/contracts";

const useStake = () => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(
        async (poolId, amount) => {
            if (!isSupportedChain(chainId))
                return console.error("Wrong network");

            const provider = new BrowserProvider(walletProvider);
            const signer = await provider.getSigner();

            const contract = getStakingPoolContract(signer);

            try {
                const transaction = await contract.stake(poolId, amount);
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