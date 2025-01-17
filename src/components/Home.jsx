import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
}

const Home = () => {
  return (
    <Box>
        <MyCarousel />
        <Container
        maxW={"container.xl"}
        minH={"100vh"}
        p={"8"}
        >
            <Heading
            textTransform={"uppercase"}
            py={"2"}
            w={"fit-content"}
            borderBottom={"2px solid"}
            m={"auto"}
            >
                Services
            </Heading>
            <Stack
            h={"full"}
            p={"4"}
            alignItems={"center"}
            direction={["column", "row"]}
            >
                <Image 
                src={img5}
                filter={"hue-rotate(-130deg)"}
                h={["40", "400"]} />
                <Text
                letterSpacing={"widest"}
                lineHeight={"190%"}
                p={["4", "16"]}
                textAlign={"center"}
                >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </Text>
            </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel = () => (
    <Carousel 
    autoPlay
    infiniteLoop
    interval={2500}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    transitionTime={1000}
    >
        <Box w={"full"} h={"100vh"}>
            <Image 
            src={img1} 
            h={"full"}
            w={"full"}
            objectFit={"cover"} />
            <Heading
            bgColor={"blackAlpha.600"}
            color={"white"} {...headingOptions}>Watch The Future</Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image 
            src={img2}
            h={"full"}
            w={"full"}
            objectFit={"cover"} />
            <Heading
            bgColor={"whiteAlpha.600"}
            color={"black"} {...headingOptions}>Future Is Gaming</Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image 
            src={img3}
            h={"full"}
            w={"full"}
            objectFit={"cover"} />
            <Heading
            bgColor={"whiteAlpha.600"}
            color={"black"} {...headingOptions}>Game On Console</Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image 
            src={img4}
            h={"full"}
            w={"full"}
            objectFit={"cover"} />
            <Heading
            bgColor={"blackAlpha.600"}
            color={"white"} {...headingOptions}>Nightlife Chill</Heading>
        </Box>
    </Carousel>
)

export default Home