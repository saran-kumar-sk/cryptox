import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

function NftCard({ picture, name, rating, price, authorSrc }) {
  return (
    <Box w="250px" maxH="350px" m={'1rem'}>
      <Image
        borderRadius={'10px 10px 0 0'}
        src={picture}
        alt={name}
        w="100%"
        height="200px"
      />
      <Box
        bg="rgb(17,19,23)"
        borderRadius={'0 0 10px 10px'}
        p={'.5rem'}
        _hover={{
          bg: 'rgb(30,39,70)',
        }}
      >
        <Flex alignItems={'center'} justifyContent="space-around">
          <Heading size="sm" fontWeight={'bold'} fontFamily={'Kinn'}>
            {name}
          </Heading>
          <Flex alignItems={'center'}>
            <span>⭐</span>
            <Text fontSize={'smaller'}>{rating}</Text>
          </Flex>
          <Avatar name="Author" size={'xs'} src={authorSrc} />
        </Flex>

        <Flex
          mt="1rem"
          alignItems={'center'}
          justifyContent="space-around"
          m={'.5rem 0'}
        >
          <Box>
            <Text fontSize="xs" fontFamily={'Kinn'} fontWeight="400">
              Current Price
            </Text>
            <Text fontSize={'sm'} fontFamily={'Kinn'}>
              {price}
            </Text>
          </Box>
          <Button
            size={'sm'}
            variant={'outline'}
            _hover={{
              bg: 'rgb(28,82,251)',
            }}
            fontSize={'xs'}
          >
            Place A Bid
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default NftCard;
