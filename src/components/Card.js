import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  const greeting = "Hello!";
  const bio1 = "I am a Front end Developer";
  const bio2 = "Passionate about building web sites and web applications.";

  return (
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

export default Card;
