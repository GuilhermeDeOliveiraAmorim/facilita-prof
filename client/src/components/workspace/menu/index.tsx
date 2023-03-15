import { Button, Flex } from "@chakra-ui/react";

interface Imenu {

}

export default function Menu() {
    return (
        <Flex
            height="50px"
            backgroundColor="#1D3557"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
        >
            <Button colorScheme='blue'>Button</Button>
        </Flex>
    )
}
