import {
Alert,
AlertIcon,
AlertTitle,
ListItem,
OrderedList,
Tabs,
TabList,
TabPanels,
TabPanel,
VStack,
HStack,
Show,
Tab,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";
import Article from "./Article";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface fetchGenreResponse {
  count: number;
  results: Genre[];
}

function AllArticles() {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<fetchGenreResponse>("/games")
      .then((res) => setGenre(res.data.results))
      .catch((err) => setError(err.message));
  });
  const tabNum = Math.ceil(genre.length / 4);

  return (
    <>
      <>
        <Show above="md">
          {error && (
            <Alert status="error">
              <AlertIcon /> <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          <OrderedList>
            {genre.map((el) => (
              <ListItem key={el.id}>
                <Article key={el.id} heading={el.name} />
              </ListItem>
            ))}
          </OrderedList>
        </Show>
        <Show below="md">
          <VStack>
            <Tabs isFitted align={"center"}>
              <TabPanels minW={"md"}>
                {Array.from({ length: tabNum }, (_, i) => (
                  <TabPanel>
                    <HStack justify={"center"}>
                      {genre.slice(i * 4, (i + 1) * 4).map((element) => (
                        <Article key={element.id} heading={element.name} />
                      ))}
                    </HStack>
                  </TabPanel>
                ))}
              </TabPanels>
              <TabList>
                {Array.from({ length: tabNum }, (_, i) => (
                  <Tab key={i}>{i + 1}</Tab>
                ))}
              </TabList>
            </Tabs>
          </VStack>
        </Show>
      </>
    </>
  );
}

export default AllArticles;
