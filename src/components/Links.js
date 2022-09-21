import { Button, Box, Text, Flex, Switch } from '@chakra-ui/react';
import React from 'react';
import { BsSun } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
function Links({ data }) {
  return (
    <Box>
      {data.map((link, index) => (
        <Button
          display={'block'}
          key={index}
          leftIcon={link.icon}
          href={link.href}
          m="0.2rem 0"
          bg="transparent"
        >
          {link.name}
        </Button>
      ))}
      <br />
      <Text m="0.5rem 0" color="gray">
        {'Preferences'.toUpperCase()}
      </Text>
      <Flex alignItems={'center'}>
        <Button leftIcon={<BsSun />} m="0.2rem 0" bg="transparent">
          Themes
        </Button>
        <Switch />
      </Flex>
      <Button leftIcon={<FiSettings />} m="0.2rem 0" bg="transparent">
        Settings
      </Button>
    </Box>
  );
}

export default Links;
