import React from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const socials = [
  { label: 'Twitter', href: '#', icon: FaTwitter },
  { label: 'Facebook', href: '#', icon: FaFacebook },
  { label: 'Instagram', href: '#', icon: FaInstagram },
  { label: 'Github', href: '#', icon: FaGithub },
];

interface socialButtonProps {
  icon: IconType;
  label: string;
  href: string;
}

const SocialButton = ({ icon, label, href }: socialButtonProps) => {
  return (
    <Tooltip label={label} hasArrow bg="gray.300" color="black">
      <Button
        as="a"
        href={href}
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded="full"
        w={10}
        h={10}
        cursor="pointer"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        transition="background 0.3 ease"
        _hover={{ bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200') }}
      >
        <Icon as={icon} />
      </Button>
    </Tooltip>
  );
};

const Footer = () => {
  return (
    <Box bg={useColorModeValue('gray.100','gray.900')}>
      <Flex p={4} alignItems="center" direction={{ base: 'column', md: 'row' }}>
        <Text textAlign='center'>© 2022 Company Name. All rights reserved</Text>
        <Spacer />
        <HStack mt={{ base: 4, md: 0 }}>
          {socials.map((social) => (
            <SocialButton
              key={social.label}
              label={social.label}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
