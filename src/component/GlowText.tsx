import React from 'react';
import { Text } from '@chakra-ui/react';

interface TextProps {
  text: string;
}

const GlowText: React.FC<TextProps> = ({ text }) => (
  <Text
    display="flex"
    justifyContent="center"
    alignItems="center"
    p={2}
    fontSize={{ base: 'lg', md: '2xl' }}
    fontWeight="bold"
    w="full"
    h="full"
    style={{
      boxShadow: '-1px -1px 5px blue, 1px 1px 5px red',
      background: '-webkit-linear-gradient(-45deg, blue, red)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    {text}
  </Text>
);

export default GlowText;
