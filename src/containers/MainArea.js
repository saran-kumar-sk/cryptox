import { Tab, TabList, TabPanels, Tabs, TabPanel } from '@chakra-ui/react';
import React from 'react';
import TopHeader from '../components/TopHeader';
import Trading from './Tabs/Trading';

function MainArea() {
  return (
    <>
      <TopHeader name="Hosen R." />
      <Tabs variant={'line'} isFitted>
        <TabList>
          <Tab _selected={{ color: '#fff', borderBottom: '2px solid blue' }}>
            Trading
          </Tab>
          <Tab _selected={{ color: '#fff', borderBottom: '2px solid blue' }}>
            Live Auction
          </Tab>
          <Tab _selected={{ color: '#fff', borderBottom: '2px solid blue' }}>
            Created(25)
          </Tab>
          <Tab _selected={{ color: '#fff', borderBottom: '2px solid blue' }}>
            Owned(35)
          </Tab>
          <Tab _selected={{ color: '#fff', borderBottom: '2px solid blue' }}>
            Listing
          </Tab>
          <Tab _selected={{ color: '#fff', borderBottom: '2px solid blue' }}>
            Bookmark
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Trading />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default MainArea;
