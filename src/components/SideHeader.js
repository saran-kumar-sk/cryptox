import { Avatar, Button, Flex, IconButton, Spacer } from '@chakra-ui/react';
import React from 'react';
import { GrFormAdd } from 'react-icons/gr';
import { IoMdNotificationsOutline } from 'react-icons/io';
function SideHeader() {
  return (
    <Flex alignItems="center" mb="2rem">
      <IconButton icon={<IoMdNotificationsOutline />} mr=".5rem" size="sm" />
      <Button
        bg="rgb(128,194,68)"
        color="#000"
        size="sm"
        leftIcon={<GrFormAdd />}
      >
        New
      </Button>
      <Spacer />
      <Avatar
        borderRadius={5}
        src="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_960_720.jpg"
        name="R"
        size={'sm'}
      />
    </Flex>
  );
}

export default SideHeader;
