import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <VStack spacing={4} alignItems="center">
      <Image src={imageSrc} alt="Avatar" borderRadius="full" boxSize="150px" /> 
    <Heading as="h1" size="xl">
    {title}
  </Heading>

  <Text>{description}</Text>

  <HStack spacing={2}>
    <Text>Greeting:</Text>
    <Text>{greeting}</Text>
  </HStack>

  <HStack spacing={2}>
    <Text>Bio 1:</Text>
    <Text>{bio1}</Text>
  </HStack>

  <HStack spacing={2}>
    <Text>Bio 2:</Text>
    <Text>{bio2}</Text>
  </HStack>

  <FontAwesomeIcon icon={faArrowRight} />
</VStack>
);
  };


  const greeting = "Hello!";
  const bio1 = "I am a Front end Developer";
  const bio2 = "Passionate about building web sites and web applications.";
  
  const imageSrc = "https://example.com/new-image.jpg";

export default Card;
