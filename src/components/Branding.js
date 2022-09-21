import { Avatar, Heading, Flex } from '@chakra-ui/react';
import React from 'react';

function Branding() {
  return (
    <Flex alignItems={'center'} p="2rem">
      <Avatar name="C" bg="#fff" color="#000" size="md" />
      <Heading variant={'h3'} size="sm" ml=".5rem" fontFamily={'Kinn'}>
        Crypto X
      </Heading>
    </Flex>
  );
}

export default Branding;
