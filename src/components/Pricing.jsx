import React from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { Element } from 'react-scroll';

const pricingData = [
  {
    title: "TIER 1",
    options: [
      { id: 1, desc: 'Mencatat barang masuk' },
      { id: 2, desc: 'Mencatat barang keluar.' },
      { id: 3, desc: 'Mencatat hasil keuntungan' },
    ],
    price: "10",
  },
  {
    title: "TIER 2",
    options: [
      { id: 1, desc: 'Mencatat barang masuk dan keluar' },
      { id: 2, desc: 'Mencatat Keuntungan' },
      { id: 3, desc: 'Dapat menganalisa hasil penjualan' },
      { id: 4, desc: 'Support 7x24 Jam' },
    ],
    price: "50",
  },
  {
    title: "TIER 3",
    options: [
      { id: 1, desc: 'Mencatat barang masuk dan keluar' },
      { id: 2, desc: 'Mencatat Keuntungan' },
      { id: 3, desc: 'Dapat menganalisa hasil penjualan' },
      { id: 4, desc: 'Support 7x24 Jam' },
      { id: 5, desc: 'Export data ke Excel' },
      { id: 6, desc: 'AI Prediksi penghasilan' },
    ],
    price: "150",
  }
];

const Pricing = () => {
  return (
    <Element name="pricing">
      <Box py={6} px={5} width="full" marginTop="50px">
        <Stack spacing={4} width={'100%'} direction={'column'}>
          <Stack
            p={5}
            alignItems={'center'}
            justifyContent={{
              base: 'flex-start',
              md: 'space-around',
            }}
            direction={{
              base: 'column',
              md: 'row',
            }}
          >
            <Flex justifyContent="center" alignItems="center" flexDirection="column">
              <Heading textAlign={'center'} size={'lg'}>
                The Right Plan for Your Business
              </Heading>
            </Flex>
          </Stack>
          <Divider />
          {pricingData.map((i, index) => {
            return (
              <Stack
                p={3}
                py={3}
                justifyContent={{
                  base: 'flex-start',
                  md: 'space-around',
                }}
                direction={{
                  base: 'column',
                  md: 'row',
                }}
                alignItems={{ md: 'center' }}
                key={index}>
                <Heading size={'md'}>{i.title}</Heading>
                <List spacing={3} textAlign="start" width="350px">
                  {i.options.map((desc) => (
                    <ListItem key={desc.id}>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      {desc.desc} 
                    </ListItem>
                  ))}
                </List>
                <Heading size={'xl'}>$ {i.price}</Heading>
                <Stack>
                  <Button
                    size="md">
                    Get Started
                  </Button>
                </Stack>
              </Stack>
            )
          })}
          <Divider />
        </Stack>
      </Box>
    </Element>
  );
};

export default Pricing
