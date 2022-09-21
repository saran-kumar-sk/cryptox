import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import LeftArea from '../containers/LeftArea';
import MainArea from '../containers/MainArea';
import RightArea from '../containers/RightArea';

function Layout() {
  return (
    <Flex gap={2}>
      <Box flex={0.175} borderRight="1px solid gray" maxh="100vh">
        <LeftArea />
      </Box>
      <Box as="main" flex={0.6}>
        <MainArea />
      </Box>
      <Box flex={0.215}>
        <RightArea />
      </Box>
    </Flex>
  );
}

export default Layout;
