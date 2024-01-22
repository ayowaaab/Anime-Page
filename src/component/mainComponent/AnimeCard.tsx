import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Card,
  Image,
  Button,
  CardFooter,
  Text,
  HStack,
  useBoolean,
} from "@chakra-ui/react";

interface Props {
  img: string;
  title: string;
}

function AnimeCard({ img, title }: Props) {
  const [flag, setFlag] = useBoolean();

  return (
    <>
      <Card
        justifySelf={"center"}
        bg={"purple.900"}
        w={"full"}
        h={"300px"}
        overflow={"hidden"}
        transition={".3s"}
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        <Image
          src={img}
          alt="Green double couch with wooden legs"
          objectFit={"cover"}
          h={"70%"}
        />
        <CardFooter
          justifyContent={"center"}
          flexDirection={"column"}
          pt={0}
          whiteSpace={"nowrap"}
        >
          <Text
            fontWeight={"500"}
            fontSize={{ base: "xs", sm: "xs", xl: "sm", "2xl": "md" }}
            m={0}
            p={2}
            textAlign={"center"}
          >
            {title.length >= 20 ? title.slice(0, 25) + " . . ." : title}
          </Text>
          <HStack gap={3} px={5} justifyContent={"center"}>
            <Button colorScheme="purple">Watch</Button>
            <Button onClick={setFlag.toggle} colorScheme="gray">
              {!flag ? <AddIcon /> : <CheckIcon />}
            </Button>
          </HStack>
        </CardFooter>
      </Card>
    </>
  );
}

export default AnimeCard;
