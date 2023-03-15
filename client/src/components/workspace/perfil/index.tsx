import { Box } from "@chakra-ui/react";
import Picture from "./picture";

interface IPerfil {
    name: string;
    picture: string;
}

export default function Perfil(props: IPerfil) {
    const { name, picture } = props;
    return (
        <Box backgroundColor="#A8DADC" padding="25px">
            <Picture name={name} picture={picture} />
        </Box>
    )
}
