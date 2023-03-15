import { Flex, GridItem, Text } from "@chakra-ui/react";

interface ISection {
    title: string;
    component: JSX.Element;
}

export default function Section(props: ISection) {
    const { title, component } = props;
    return (
        <GridItem
            width="100%"
            backgroundColor="#1D3557"
            rounded="20px"
            padding="2px"
        >
            <Text
                backgroundColor="#457B9D"
                roundedTop="18px"
                padding="5px"
                color="#F1FAEE"
                fontWeight="black"
            >
                {title}
            </Text>
            <Flex width="100%">
                {component}
            </Flex>
        </GridItem>
    )
}
