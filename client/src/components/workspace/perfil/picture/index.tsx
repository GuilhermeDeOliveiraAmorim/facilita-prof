import { Image } from '@chakra-ui/react';

interface IPicture {
    name: string;
    picture: string;
}

export default function Picture(props: IPicture) {
    const { name, picture } = props;
    return (
        <Image
            src={picture}
            alt={name}
            backgroundColor="#F1FAEE"
            borderRadius='full'
            boxSize='100px'
        />
    )
}
