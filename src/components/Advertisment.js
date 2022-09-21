import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import PremiumAd from '../assets/images/premium.png';
function Advertisment() {
  return (
    <Box w="90%" m="auto">
      <Image
        src={PremiumAd}
        alt="Premium"
        h="190px"
        objectFit={'contain'}
        textAlign={'center'}
        w="100%"
      />
    </Box>
  );
}

export default Advertisment;
