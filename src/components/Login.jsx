import { Button, Center, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container
    maxW={"container.xl"}
    h={"110vh"}
    p={["4", "16"]}
    marginTop={["8", "0"]}>
        <form>
            <VStack
            alignItems={"stretch"}
            spacing={"8"}
            w={["full", "96"]}
            m={"auto"}
            my={"16"}>
                <Center>
                    <Heading>Welcome Back!</Heading>
                </Center>
                <Input
                placeholder='Email Here'
                type='email'
                focusBorderColor={"purple.500"}
                required />

                <Input
                placeholder='Password Here'
                type='password'
                focusBorderColor={"purple.500"}
                required />

                <Button
                variant={"link"}
                justifyContent={"flex-end"}>
                    <Link to={"/forgotPassword"}>Forgot Password?</Link>
                </Button>

                <Button
                colorScheme={'purple'}
                type={'submit'}
                >Log In</Button>

                <Text textAlign={"right"}>New User? {" "}
                    <Button
                    variant={"link"}
                    colorScheme={'purple'}>
                        <Link to={"/signup"}>Sign Up</Link>
                    </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Login