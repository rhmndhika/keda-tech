import React from 'react';
import { Button, Flex, HStack, Text, useMediaQuery,   
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, 
  useDisclosure,
  Input,
  FormLabel,
  FormControl
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { css } from '@emotion/css';
import { Link } from 'react-scroll'; 
import { AiFillHome } from 'react-icons/ai'
import HomeIcon from '../assets/HomeIcon.png'
import Vector from '../assets/vector.png'

const container = css`
  padding: 30px; 
`;

const textLink = css`
  font-size: 1rem; 
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin-left: 5px; 
  position: relative;
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s;
  }

  :hover::before {
    width: 100%;
  }
`;


const Navbar = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" placeholder='Username' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
    </Modal>
    <Flex
      alignItems="center"
      flexDirection={isLargerThan768 ? 'row' : 'column'} 
      justifyContent="space-between"
      margin="20px"
      className={container}
    >
      <HStack>
        <img src={HomeIcon} />
        <Text fontSize="30px" color="black" fontWeight="700" cursor="pointer">
          Home
        </Text>
      </HStack>
      <HStack>
        <Link to="about" smooth={true} duration={500}>
          <Text className={textLink}>ABOUT</Text>
        </Link>
        <Link to="pricing" smooth={true} duration={500}>
          <Text className={textLink}>PRICING</Text>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <Text className={textLink}>CONTACT</Text>
        </Link>
        <Button colorScheme="blue" variant="outline" marginLeft="10px" onClick={onOpen}>
          LOGIN
        </Button>
      </HStack>
    </Flex>
    </>
  );
};

export default Navbar;
