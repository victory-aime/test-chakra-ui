"use client";
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  useBreakpointValue,
  IconProps,
  Icon,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import { Form } from "react-router-dom";

const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

export default function Login() {
  const [username, setUsername] = useState("John Doe");
  const [password, setPassword] = useState("changme");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: "1", username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Réponse de l'API:", data);

        localStorage.setItem("token", data.access_token);
        localStorage.setItem("username", data.username);
      } else {
        const errorData = await response.json();
        console.error("Erreur de l'API:", errorData);
        // Utilisez les informations d'erreur pour afficher un message à l'utilisateur
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      // Gérez les erreurs ici
    }
  };

  return (
    <Box>
      <Navbar />
      <Box position="relative">
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              Welcome{" "}
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                &
              </Text>{" "}
              Sign in to your account
            </Heading>
          </Stack>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
                Join us
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  !
                </Text>
              </Heading>
            </Stack>
            <Box mt={10}>
              <FormControl isInvalid={!username}>
                <Stack spacing={4}>
                  <Input
                    placeholder="username"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {!username ? (
                    <FormHelperText>Username is required.</FormHelperText>
                  ) : (
                    <FormErrorMessage>Invalid username.</FormErrorMessage>
                  )}
                  <Input
                    type="password"
                    placeholder="Password"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>

                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                  type="submit"
                  onClick={handleSubmit}
                  isLoading={false}
                >
                  Submit
                </Button>
              </FormControl>
            </Box>
            <Blur
              position={"absolute"}
              top={200}
              left={-10}
              style={{ filter: "blur(70px)" }}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
