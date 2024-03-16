import { useState } from "react";
import useStake from "../hooks/useStake";

export default function Stake() {
    const [stakeAmount, setStakeAmount] = useState(0);
    const [poolId, setPoolId] = useState(0);

    const stake = useStake();
    return (
        <div>
            <h1>Stake</h1>
        </div>
    );
}