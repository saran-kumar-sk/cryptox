import { Heading, Image } from '@chakra-ui/react';
// import {Box, Flex, Text, Image} from '@chakra-ui/react'
import React from 'react';
import Card from '../assets/images/card.png';
function PaymentCard() {
  return (
    <>
      <Heading size="md" m="2rem 0">
        Payment Card
      </Heading>
      {/* <Box borderRadius={10} bg="rgb(154,20,105)" p="2rem">
        <Flex alignItems={'center'} justifyContent="space-between">
          <Text>Credit Card</Text>
          <Heading size="sm">Bank</Heading>
        </Flex>
        <Box w="100%" minH="30px" />
        <Text>1234 4568 1234 4568</Text>
        <Text textAlign={'right'}>
          <Box as="span" fontSize={'8px'}>
            valid thru
          </Box>{' '}
          00/00
        </Text>
        <Text as="h4" letterSpacing={2} mt="1rem">
          NAME SURNAME
        </Text>
      </Box> */}
      <Image src={Card} alt="card" />
    </>
  );
}

export default PaymentCard;
