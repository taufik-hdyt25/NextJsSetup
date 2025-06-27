import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { JSX } from "react";

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <Box pos={"relative"}>
      <Box p={10} bg={"#0089ED"} h={"50vh"} w={"full"}>
        <Flex flexDirection={"column"} h={"full"} justify={"center"}>
          <Heading color={"white"}>Sign In to</Heading>
          <Text fontSize={"xl"} color={"white"}>
            Lorem Ipsum is simply{" "}
          </Text>
          <Text mt={3} maxW={"400px"} color={"white"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Text>
        </Flex>
      </Box>
      <Box p={10} bg={"white"} h={"50vh"} w={"full"}>
        <Flex flexDirection={"column"} h={"full"} justify={"start"}>
          <Heading>Sign In to</Heading>
          <Text fontSize={"xl"}>Lorem Ipsum is simply </Text>
          <Text mt={3} maxW={"400px"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Text>
        </Flex>
      </Box>

      <Box
        pos="absolute"
        right={10}
        top={0}
        bottom={0}
        my="auto"
        bg="white"
        shadow={"lg"}
        rounded={"2xl"}
        p={10}
        w="500px"
        h="calc(100% - 80px)" // agar ada padding vertikal total 80px (py=10x2=20*2=40px)
      >
        <Text>Welcome to</Text>
        <Heading mt={3} fontWeight={"light"}>
          Sign In
        </Heading>

        <Button size={"lg"} mt={10} w={"full"} bg={"#E9F1FF"} color={"#4285F4"}>
          Sign in with google
        </Button>

        <Stack mt={14} spacing={5}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Text textAlign={"end"}>Forgot Password</Text>
        </Stack>

        <Button mt={14} w={"full"}>
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
