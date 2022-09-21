import { Box, Flex, Heading, Text, Spacer, Input } from '@chakra-ui/react';
import React from 'react';

function TopHeader({ name }) {
  return (
    <Box p="2rem">
      <Flex alignItems={'center'}>
        <Box>
          <Heading fontFamily={'Kinn'}>Hi {name}</Heading>
          <Text color="gray" fontSize={'sm'}>
            Welcome Back!
          </Text>
        </Box>
        <Spacer />
        <>
          <Text>User</Text>
          <Box
            as="span"
            w="5px"
            h="5px"
            mt="-15px"
            mr="2px"
            borderRadius={'100%'}
            bg="blue"
          />
        </>
        <Text m="0 1rem" color="gray">
          Creator
        </Text>
        <Input
          width="30%"
          placeholder="search"
          bg="rgb(17,19,23)"
          border="none"
          color="#fff"
        />
      </Flex>
    </Box>
  );
}

export default TopHeader;
