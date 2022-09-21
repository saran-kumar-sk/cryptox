import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { transactions } from '../data/transactions';

function Transactions() {
  return (
    <>
      <Heading as="h3" size="md" mb="1rem">
        Recent Transactions
      </Heading>
      <Box p=".5rem 0" borderRadius={'10px'} bg="rgb(19,20,24)">
        {transactions.map((transcation, index) => (
          <Flex
            alignItems={'center'}
            justifyContent="space-evenly"
            key={index}
            m="1rem 0"
          >
            <Avatar src={transcation.coinImage} name="Bitcoin" size={'sm'} />
            <Box>
              <Text fontSize={'md'}>{transcation.amount}</Text>
              <Text fontSize="xs" color="gray">
                {transcation.dollars}
              </Text>
            </Box>
            <Box>
              <Text fontSize={'md'}>{transcation.diff}</Text>
              <Text fontSize="xs" color="gray">
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </>
  );
}

export default Transactions;
