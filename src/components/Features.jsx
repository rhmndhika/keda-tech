import React from 'react';
import { Icon, Text,  Flex, Heading, Stack, Box } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Element } from 'react-scroll';


const data = [
  {
    icon: <Icon as={FcAssistant} w={10} h={10} />,
    title: "Effortless Inventory Management",
    text: "Our ERP system allows business owners to effortlessly monitor and manage their inventory."
  },
  {
    icon: <Icon as={FcDonate} w={10} h={10} />,
    title: "Financial Transparency",
    text: "Our ERP system allows business owners to effortlessly monitor and manage their inventory."
  },
  {
    icon: <Icon as={FcInTransit} w={10} h={10} />,
    title: "User-Friendly Interface",
    text: "Our ERP system allows business owners to effortlessly monitor and manage their inventory."
  },
]

const Feature = ({ title, text, icon }) => {
  return (
    <Stack margin="20px" borderRadius="10px">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}


const Features = () => {
  return (
    <Element name="features">
      <Box p={4}>
        <Flex justifyContent="center" alignItems="center">
          <Heading>
            Our Features
          </Heading>
        </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        {data.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
            />
          ))}
      </Flex>
      </Box>
    </Element>
  );
}

export default Features;

