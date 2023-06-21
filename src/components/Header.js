import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
 
  {
    icon: faGithub,
    url: "https://github.com/Jlovellealfeche",
  
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/joan-lovelle-alfeche",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/15541200/jlovellealfeche",
  },
  {
    icon: faYoutube,
    url: "https://www.youtube.com/channel/UClP7r1sExpkOc2-hNYn6Vqg",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav  className= "nav">
            {/* Add social media links based on the `socials` data */
              <ul>
                {socials.map((social, index) => (
                  <li key={index}>
                    <a href={social.url} className={`${social.iconName} social`}>
                      <FontAwesomeIcon icon={social.icon} size="2x" />
                    </a>
                  </li>
                ))}
              </ul>
            }
      
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects-section">Projects</a>
              <a href="#contact-section">Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
