import { useState } from "react";
import useStake from "../hooks/useStake";
import { Box, Button, Card, Flex, Text, TextField } from "@radix-ui/themes";

export default function Stake() {
    const [stakeAmount, setStakeAmount] = useState(0);
    const [poolId, setPoolId] = useState(0);

    const handleStake = useStake();

    return (
        <Card size="2" style={{ width: 425 }}>
            <Flex gap="" align="center">
                <Box width={"100%"}>
                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Pool ID
                            </Text>
                            <TextField.Input value={poolId} placeholder="Enter a stake pool ID" onChange={(e) => setPoolId(e.target.value)} />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Stake amount
                            </Text>
                            <TextField.Input value={stakeAmount} placeholder="Enter stake amount" onChange={(e) => setStakeAmount(e.target.value)} />
                        </label>
                        <Button onClick={() => handleStake(poolId, stakeAmount)}>
                            Stake
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    );
}