import { Flex } from "@radix-ui/themes";
import CreatePool from "./CreatePool";

export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <Flex gap={"4"} align={"center"}>
                <div>Staking Pools</div>
            </Flex>
            <Flex>
                <CreatePool />
                <w3m-button />
            </Flex>
        </div>
    );
}
