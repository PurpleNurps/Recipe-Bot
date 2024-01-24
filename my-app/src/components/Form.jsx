import {
  Container,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";
import recipeGenerator from "../client.js"

// Create a form component that takes in user input
// and returns a list of recipes
//
import React, { useState } from 'react';

export default function Form() {
  const [ingredients, setIngredients] = useState('');

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleButtonClick = () => {
    recipeGenerator(ingredients);
  };

  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
      bg="orange.200"
    >
      <Center>
        <Container p="20px" bg="white" borderRadius={10}>
          <FormControl>
            <FormLabel>Recipe Bot</FormLabel>
            <FormHelperText p="3" color="blue.600">Hey good looking, what you got cooking?</FormHelperText>
            <Input placeholder="Enter ingredients here" value={ingredients} onChange={handleInputChange} />
            <Button onClick={handleButtonClick}>Generate Recipe</Button>
          </FormControl>
        </Container>
      </Center>
    </Flex>
  );
}