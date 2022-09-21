import { Box } from '@chakra-ui/react';
import React from 'react';
import PaymentCard from '../components/PaymentCard';
import SideHeader from '../components/SideHeader';
import Transactions from '../components/Transactions';

function RightArea() {
  return (
    <Box pt="2rem">
      <SideHeader />
      <Transactions />
      <PaymentCard />
    </Box>
  );
}

export default RightArea;
