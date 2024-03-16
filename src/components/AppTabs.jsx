import { Box, Text, Tabs } from "@radix-ui/themes";
import Stake from "./Stake";
import CreatePool from "./CreatePool";
import StakingPools from "./StakingPools";

const AppTabs = () => {
    return (
        <Tabs.Root defaultValue="staking-pools">
            <Tabs.List>
                <Tabs.Trigger value="staking-pools">Staking pools</Tabs.Trigger>
                <Tabs.Trigger value="your-stake">Your stake</Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
                <Tabs.Content value="staking-pools">
                    <Text size="2">{CreatePool}</Text>
                    <StakingPools />
                    <Stake />
                </Tabs.Content>

                <Tabs.Content value="your-stake">
                    <Text size="2">{Stake}</Text>
                </Tabs.Content>
            </Box>
        </Tabs.Root>
    );
}

export default AppTabs;