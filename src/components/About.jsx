import React from 'react'
import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import Startup from '../assets/undraw_startup_life_re_8ow9.svg'
import { Link } from 'react-scroll'; 
import { Element } from 'react-scroll';

const About = () => {

  return (
    <Element name="about">
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}>
                KEDA TECH
              </Text>
              <br />
            </Heading>
            <Text color={'gray.500'} textAlign="justify">
            Introducing KeDA Tech, a pioneering startup dedicated to simplifying business operations through our cutting-edge ERP 
            (Enterprise Resource Planning) solutions. At KeDA Tech, we understand the challenges that entrepreneurs face in managing their daily business operations efficiently, which is why we have developed a comprehensive website-based ERP system.
            </Text>
            <Link to="features" smooth={true} duration={500}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}>
                Get started
              </Button>
            </Link>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
              <Image
                alt={'Startup'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={Startup}
              />
          </Flex>
        </Stack>
      </Container>
    </Element>
  )
}

export default About