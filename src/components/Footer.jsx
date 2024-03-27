import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai"

const Footer = () => {
  return <Box 
  bgColor={"blackAlpha.900"}
  minH={"40"}
  p={"16"}
  color={"white"}
  >
    <Stack direction={["column", "row"]}>
        <VStack
        alignItems={"stretch"}
        width={"full"}
        px={"4"}
        marginBottom={["12", "auto"]}>
            <Heading 
            size="md"
            textTransform={"uppercase"}
            textAlign={["center", "left"]}
            >
                Subscribe to get updates
            </Heading>
            <HStack
            borderBottom={"2px solid white"}
            p={"2"}
            marginRight={"8"}>
                <Input 
                    placeholder='Enter Email Here...'
                    border={"none"}
                    borderRadius={"none"}
                    outline={"none"}
                    focusBorderColor='none'
                />
                <Button
                p={"0"}
                colorScheme='purple'
                variant={"ghost"}
                borderRadius={"0 20px 20px 0"}
                >
                    <AiOutlineSend size={"20"} />
                </Button>
            </HStack>
        </VStack>
        <VStack
        w={"full"}
        borderLeft={["none", "1px solid white"]}
        borderRight={["none", "1px solid white"]}
        marginBottom={["12", "auto"]}
        >
            <Heading
            textTransform={"uppercase"}
            textAlign={"center"}>Video Hub</Heading>
            <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={"full"}>
            <Heading 
            size={"md"}
            textTransform={"uppercase"}
            >
            Social Media
            </Heading>
                <Button
                variant={"link"}
                colorScheme='purple'
                >
                    <a href='https://www.linkedin.com/in/srivastava-ishan/' target={'blank'}
                    >LinkedIn</a>
                </Button>

                <Button 
                variant={"link"}
                colorScheme='purple'>
                    <a href='https://github.com/ishansrivastava123/' target={'blank'}>GitHub</a>
                </Button>

                <Button 
                variant={"link"}
                colorScheme='purple'
                >
                    <a href='https://www.instagram.com/ishansrivastava123/' target={'blank'}>Instagram</a>
                </Button>
        </VStack>
    </Stack>

  </Box>
}

export default Footer