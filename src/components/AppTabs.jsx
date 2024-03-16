import {Box, Text, Tabs } from "@radix-ui/themes";
import Stake from "./Stake";

const AppTabs = ({ StakingPools, YourStakes }) => {
    return (
        <Tabs.Root defaultValue="staking-pools">
            <Tabs.List>
                <Tabs.Trigger value="staking-pools">Staking pools</Tabs.Trigger>
                <Tabs.Trigger value="your-stake">Your stake</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
                <Tabs.Content value="staking-pools"> 
                    <Text size="2">Stake your tokens to earn rewards.</Text>
                    <Stake/>
                </Tabs.Content>

                <Tabs.Content value="your-stake">
                    <Text size="2">{YourStakes}</Text>
                </Tabs.Content>

                <Tabs.Content value="settings">
                    <Text size="2">Edit your profile or update contact information.</Text>
                </Tabs.Content>
            </Box>
        </Tabs.Root>
    );
}

export default AppTabs;