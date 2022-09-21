import { Box } from '@chakra-ui/react';
import React from 'react';
import Advertisment from '../components/Advertisment';
import Branding from '../components/Branding';
import Links from '../components/Links';
import { links } from '../data/links';
function LeftArea() {
  return (
    <Box>
      <Branding />
      <Box textAlign={'left'} ml="1.5rem">
        <Links data={links} />
      </Box>
      <Advertisment />
    </Box>
  );
}

export default LeftArea;
