import { Flex } from "@radix-ui/themes";
import CreatePool from "./CreatePool";

export default function Header() {
    return (
        <Flex className="flex justify-between items-center" justify={'between'} align={'center'}>
            <Flex gap={"4"} align={"center"}>
                <div>Staking Pools</div>
            </Flex>
            <Flex>
                <CreatePool style={{backgroundColor: "red"}} />
                <w3m-button />
            </Flex>
        </Flex>
    );
}
