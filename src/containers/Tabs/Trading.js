import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Chart from '../../components/Chart';
import NftCard from '../../components/NftCard';
import { nfts } from '../../data/nft';

function Trading() {
  return (
    <Box>
      <ScrollMenu>
        {nfts.map((nft, index) => (
          <NftCard key={index} itemId={index} {...nft} />
        ))}
      </ScrollMenu>
      <Heading as="h3" size={'md'}>
        Your Investments
      </Heading>
      <Chart />
    </Box>
  );
}

export default Trading;
