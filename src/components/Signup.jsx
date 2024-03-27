import { Avatar, Button, Center, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import pic from "../assets/6.png"

const Signup = () => {
  return (
    <Container
    maxW={"container.xl"}
    h={"150vh"}
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
                    <Heading>VIDEO HUB!</Heading>
                </Center>
                <Avatar
                m={"auto"}
                boxSize={"40"}
                src={pic}
                boxShadow={"0 0 15px #555"} />

                <Input
                placeholder='Your Name'
                type='text'
                focusBorderColor={"purple.500"}
                required />

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
                colorScheme={'purple'}
                type={'submit'}
                >Sign Up</Button>

                <Text textAlign={"right"}>Already Signed Up? {" "}
                    <Button
                    variant={"link"}
                    colorScheme={'purple'}>
                        <Link to={"/login"}>Log In</Link>
                    </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Signup