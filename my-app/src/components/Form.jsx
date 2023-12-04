import {
  Container,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Flex,
  Center,
} from "@chakra-ui/react";

// Create a form component that takes in user input
// and returns a list of recipes
//
export default function Form() {
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
            <FormHelperText>Hey good looking, what you got cooking?</FormHelperText>
            <Input placeholder="Enter ingredients here" />
          </FormControl>
        </Container>
      </Center>
    </Flex>
  );
}
