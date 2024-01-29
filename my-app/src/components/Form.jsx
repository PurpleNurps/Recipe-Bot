import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";
import recipeGenerator from "../openai.js";

// Create a form component that takes in user input
// and returns a list of recipes
//
import React, { useState } from "react";

export default function Form() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState(
    "Hey good looking, what you got cooking?"
  );

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      setRecipe(await recipeGenerator(ingredients));
    } catch (error) {
      console.error(error);
    }
    console.log(recipe);
  };

  return (
    <Flex
      width={"100%"}
      minHeight={"100vh"}
      maxHeight={"100%"}
      alignContent={"center"}
      justifyContent={"center"}
      bg="orange.200"
    >
      <Center>
        <Container m="10"p="20px" bg="blue.100" borderRadius={10}>
          <FormControl>
            <FormLabel>Recipe Bot</FormLabel>

            <Box
              bg="white"
              m="4"
              p={4}
              borderRadius="md"
              boxShadow="md"
              fontFamily="monospace"
              whiteSpace="pre-wrap"
            >
              {recipe}
            </Box>
            <Input
              bg="gray.100"
              marginBottom="5"
              placeholder="Enter ingredients here"
              value={ingredients}
              onChange={handleInputChange}
            />
            <Button onClick={handleButtonClick}>Generate Recipe</Button>
          </FormControl>
        </Container>
      </Center>
    </Flex>
  );
}
