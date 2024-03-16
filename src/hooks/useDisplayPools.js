import { getStakingPoolContract } from "../constants/contracts";
import { getJsonReadOnlyProvider } from "../constants/providers";
import stakingAbi from "../constants/stakingPool.json";
import multicallAbi from "../constants/mumbaiMulticall.json";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

const useDisplayPools = () => {
    const [pools, setPools] = useState([]);
    const [numOfPool, setNumOfPool] = useState(0);

    const stakingPoolContract = getStakingPoolContract(getJsonReadOnlyProvider);

    useEffect(() => {
        async () => {
            stakingPoolContract
                .id()
                .then((res) => setNumOfPool(Number(res)))
                .catch((err) => console.log(err));

            const poolIDs = [...Array.from({ length: numOfPool + 1 })].map(
                (_, index) => index
            );

            console.log(poolIDs);

            const itf = new ethers.Interface(stakingAbi);
            const calls = poolIDs.map((x) => ({
                target: import.meta.env.VITE_STAKING_POOL_CONTRACT_ADDRESS,
                callData: itf.encodeFunctionData("getPoolByID", [x]),
            }));

            const multicall = new ethers.Contract(
                import.meta.env.VITE_MUMBAI_MULTICALL_ADDRESS,
                multicallAbi,
                readOnlyProvider
            );

            const callResults = await multicall.tryAggregate.staticCall(false, calls);
            const validResponsesIndex = [];
            const validResponses = callResults.filter((x, i) => {
                if (x[0] === true) {
                    validResponsesIndex.push(i);
                    return true;
                }
                return false;
            });

            const decodedResponses = validResponses.map((x) =>
                itf.decodeFunctionResult("getPoolByID", x[1]));

            setPools(decodedResponses);
        }
    }, []);

    return pools;
};

export default useDisplayPools;