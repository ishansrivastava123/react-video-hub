import { Button, Container, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container
    maxW={"container.xl"}
    h={"100vh"}
    p={"16"}>
        <VStack
        color={"black.800"}
        h={"full"}
        justifyContent={"center"}
        >
            <label style={{
            border: "5px solid darkGreen",
            borderRadius: "50%",
            padding: "25px",
            borderStyle: "dashed",
            marginBottom: "20px",
            cursor: "pointer"}}>
                <input 
                type="file" 
                style={{display: "none"}} />
                <AiOutlineCloudUpload
                size={"10vmax"} />
            </label>
            <Button 
            colorScheme='purple'
            type='submit'
            w={"32"}
            >Upload</Button>
        </VStack>
    </Container>
  )
}

export default Upload