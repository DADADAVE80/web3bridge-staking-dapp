import { Flex } from "@radix-ui/themes";

export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <Flex gap={"4"} align={"center"}>
                <div>Staking Pools</div>
                <w3m-button />
            </Flex>
        </div>
    );
}
