import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  

  return (
    <VStack spacing={4} alignItems="center">
      <Image src={imageSrc} alt="Avatar" borderRadius="full" boxSize="150px" /> 
      <Heading as="h1" size="xl">
        {title}
      </Heading>
      <Text>{description}</Text>
      
      <FontAwesomeIcon icon={faArrowRight} />
    </VStack>
  );
};

export default Card;
