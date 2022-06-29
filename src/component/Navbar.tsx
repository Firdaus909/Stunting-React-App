import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FaBars,
  FaCalendarDay,
  FaHome,
  FaNewspaper,
  FaStethoscope,
  FaTimes,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

interface linkItemProps {
  label: string;
  icon: IconType;
  link: string;
}

const linkItems: Array<linkItemProps> = [
  { label: 'Home', icon: FaHome, link: '/' },
  { label: 'Article', icon: FaNewspaper, link: 'article' },
  { label: 'Diagnose', icon: FaStethoscope, link: 'diagnose' },
  { label: 'Schedule', icon: FaCalendarDay, link: 'schedule' },
];

function DesktopNav() {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Flex gap={2}>
      {linkItems.map((linkItem) => (
        <HStack
          key={linkItem.label}
          as={RouterLink}
          to={linkItem.link}
          px={2}
          py={1}
          fontSize="md"
          style={{ textDecoration: 'inherit' }}
          color={linkColor}
          _hover={{ color: linkHoverColor }}
        >
          <Icon as={linkItem.icon} />
          <Text>{linkItem.label}</Text>
        </HStack>
      ))}
    </Flex>
  );
}

function MobileNavItem({ label, icon, link }: linkItemProps) {
  return (
    <HStack
      as={RouterLink}
      to={link}
      px={4}
      py={2}
      borderRadius="lg"
      fontSize="lg"
      style={{ textDecoration: 'inherit' }}
      _hover={{ bg: useColorModeValue('blackAlpha.100', 'whiteAlpha.100') }}
    >
      <Icon as={icon} />
      <Text>{label}</Text>
    </HStack>
  );
}

function MobileNav() {
  return (
    <Stack display={{ md: 'none' }} spacing={2} pb={2}>
      {linkItems.map((linkItem) => (
        <MobileNavItem key={linkItem.label} {...linkItem} />
      ))}

      <Divider />

      <Button variant="solid" colorScheme="blue" w="100%">
        Sign In
      </Button>
      <Button variant="ghost" colorScheme="blue" w="100%">
        Sign Up
      </Button>
    </Stack>
  );
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex
        alignItems="center"
        py={2}
        px={4}
        bg={useColorModeValue('gray.200', 'gray.700')}
      >
        <Box>
          <Text>Logo</Text>
        </Box>

        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNav />
        </Flex>

        <Spacer />

        <Flex gap={2}>
          <ColorModeSwitcher />
          <ButtonGroup
            colorScheme="blue"
            display={{ base: 'none', md: 'flex' }}
          >
            <Button variant="solid">Sign In</Button>
            <Button variant="ghost">Sign Up</Button>
          </ButtonGroup>
          <IconButton
            aria-label="Toggle Navbar"
            onClick={onOpen}
            icon={isOpen ? <FaTimes /> : <FaBars />}
            display={{ base: 'inline-flex', md: 'none' }}
          />
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text>Logo</Text>
          </DrawerHeader>
          <DrawerBody onClick={onClose}>
            <MobileNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
