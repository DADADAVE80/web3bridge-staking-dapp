import useDisplayPools from "../hooks/useDisplayPools"
import PoolCard from "./PoolCard";

const StakingPools = () => {
    const handleDisplayPools = useDisplayPools();
    console.log(handleDisplayPools);

    return (
        <div className="flex gap-7 flex-wrap">
            {handleDisplayPools.map((pool, poolIndex) => (
                <div key={poolIndex}>
                    {pool.map((item, itemIndex) => (
                        <PoolCard
                            key={itemIndex}
                            index={poolIndex}
                            totalStakers={Number(item[0])}
                            totalStakedAmount={Number(item[1])}
                            rewardReserve={Number(item[2])}
                            rewardRate={Number(item[3])}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default StakingPools;