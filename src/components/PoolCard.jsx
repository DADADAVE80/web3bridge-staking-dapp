import { Box, Card, Flex, Text } from "@radix-ui/themes";
import Stake from "./Stake";
// import StakeComponent from "./StakeComponent";
// import UnstakeComponent from "./UnstakeComponent";

const PoolCard = ({
    totalStakers,
    totalStakedAmount,
    rewardReserve,
    rewardRate,
    index
    //   handleStake,
}) => {
    return (
        <>
            <Card size="2" style={{ width: 425 }} className="mb-3">
                <Flex gap="" align="center">
                    <Box width={"100%"}>
                        <Flex justify={"between"} direction={"column"} >
                            <Text as="div" weight="bold">
                                TotalStakers: {totalStakers}
                            </Text>
                            <Text as="div" weight="bold">
                                TotalStakedAmount: {totalStakedAmount}
                            </Text>
                            <Text as="div" weight="bold">
                                RewardReserve: {rewardReserve}
                            </Text>
                            <Text as="div" weight="bold">
                                RewardRate {rewardRate}
                            </Text>{

                            }
                            <Stake poolId={index} />
                            {/* <StakeComponent poolId={index} />
                            <UnstakeComponent poolId={index} /> */}
                        </Flex>
                    </Box>
                </Flex>
            </Card>
        </>
    );
};

export default PoolCard;
