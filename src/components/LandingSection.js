import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Love!";
const bio1 = "A frontend developer";
const bio2 = "Passionate in learning and applying skills i learned about building web sites and web applications.";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center">
      <Avatar size="2xl" name="love" src="https://example.com/avatar.jpg" />
      <Heading as="h1" size="2xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size="m" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
