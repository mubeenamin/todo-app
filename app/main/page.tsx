"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  List,
  ListItem,
  CloseButton,
  Flex,
  Input,
  VStack,
  SimpleGrid,
  GridItem,
  HStack,
  Grid,
  Checkbox,
  Heading,
  Divider,
  Stack,
  Box
} from "@chakra-ui/react";

const TodoList = () => {
  const [todos, setTodos] = useState(["Main"]);
  const [newTodo, setNewTodo] = useState("");
  //   const router = useRouter()

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Box
      h={{ base: "auto", md: "auto" }}
      py={[0, 10, 20]}
      alignItems="center"
      
    >
      
      <VStack
        w="auto"
        h="auto"
        p={10}
        spacing={10}
        bgGradient="linear(to-r, teal.500, green.500)"
      >
        <Heading>Todo List</Heading>
        <SimpleGrid columns={1} rowGap={10}>
          <form onSubmit={handleSubmit}>
            <HStack spacing={"24px"}>
              <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                focusBorderColor="white"
                placeholder="Add a new to-do"
                color={"white"}
                _placeholder={{ color: "white" }}
              />

              <Button
                type="submit"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
              >
                Add
              </Button>
            </HStack>
          </form>

          <GridItem colSpan={1}>
            <List>
              {todos.map((todo, index) => (
                <Stack key={index}>
                  <HStack spacing={"auto"}>
                    <Checkbox spacing={"24px"} colorScheme="orange">
                      <ListItem textColor={"white"} fontSize="large">{todo}</ListItem>
                    </Checkbox>
                    <CloseButton onClick={() => handleDelete(index)} />
                  </HStack>
                  <Divider orientation="horizontal" />
                </Stack>
              ))}
            </List>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default TodoList;
