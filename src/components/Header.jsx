import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react'
  import { Link } from "react-router-dom"
  import { BiMenuAltLeft } from "react-icons/bi"

const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
  return <>
    <Button 
    zIndex={"overlay"}
    pos={"fixed"}
    top={"4"}
    left={"4"}
    colorScheme='purple'
    p={"0"}
    h={"10"}
    w={"10"}
    borderRadius={"full"}
    onClick={onOpen}>
        <BiMenuAltLeft size={"20"} />
    </Button>

    <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>VIDEO HUB</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={"flex-start"}>
                    <Button 
                    onClick={"onClose"}
                    colorScheme='purple' variant={"ghost"}>
                        <Link to={"/"}>Home</Link>
                    </Button>
                    <Button 
                    onClick={"onClose"}
                    colorScheme='purple' variant={"ghost"}>
                        <Link to={"/videos"}>Videos</Link>
                    </Button>
                    <Button 
                    onClick={"onClose"}
                    colorScheme='purple' variant={"ghost"}>
                        <Link to={"/videos?category=free"}>Free Videos</Link>
                    </Button>
                    <Button 
                    onClick={"onClose"}
                    colorScheme='purple' variant={"ghost"}>
                        <Link to={"/upload"}>Upload Video</Link>
                    </Button>
                </VStack>
                <HStack
                pos={"absolute"}
                bottom={"10"}
                left={"0"}
                w={"full"}
                justifyContent={"space-evenly"}
                >
                    <Button 
                    onClick={"onClose"}
                    colorScheme='purple' w={"40%"} h={"12"}>
                        <Link to={"/login"}>Log In</Link>
                    </Button>
                    <Button 
                    onClick={"onClose"}
                    colorScheme='purple' variant={"outline"} w={"40%"} h={"12"}>
                        <Link to={"/signup"}>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
  </>
}

export default Header