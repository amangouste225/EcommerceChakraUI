import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Input,
  VStack,
  Button,
  Text,
  useDisclosure,
  Stack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiTechnoHeart } from "react-icons/gi";

const links = [
  { link: "Home", path: "/" },
  { link: "Products", path: "/products" },
  { link: "Contact", path: "/contact" },
];

const NavLinks = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    fontSize="md"
    fontWeight={600}
    rounded="md"
    _hover={{
      textDecoration: "none",
    }}
  >
    {children}
  </Link>
);

export const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { ColorMode, toggleColorMode } = useColorMode(null);

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack>
          <Link as={ReactLink} to="/">
            <Flex alignItems="center" justifyContent="center">
              <Icon as={GiTechnoHeart} h={6} w={6} color="orange.400" />
              <Text fontWeight="extrabold">Ecommerce</Text>
            </Flex>{" "}
          </Link>

          <HStack display={{ base: "none", md: "flex" }}>
            <Input
              placeholder="Search Products"
              size="md"
              variant="outline"
              outline="5px"
              width="auto"
              rounded="xl"
              focusBorderColor="white.400"
            />
          </HStack>
        </HStack>

        <Flex alignItems="center">
          <NavLinks>
            <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
              {links.map((link) => (
                <NavLinks key={link.link} path={link.path}>
                  {link.link}
                </NavLinks>
              ))}
              <Icon
                as={ColorMode === "light" ? MoonIcon : SunIcon}
                alignSelf="center"
                onClick={() => toggleColorMode()}
              />
            </HStack>
          </NavLinks>
          <Button
            as={ReactLink}
            to="/login"
            p={2}
            fontSize="sm"
            fontWeight={400}
            variant="link"
            _hover={{ textDecoration: "none" }}
          >
            Sign In
          </Button>

          <Button
            as={ReactLink}
            display={{ base: "none", md: "inline-flex" }}
            p={2}
            to="/register"
            fontSize="sm"
            ml={5}
            rounded="xl"
            px={8}
            fontWeight={600}
            _hover={{ bg: "orange.400" }}
            bg="orange.500"
            color="white"
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <NavLinks key={link.link} path={link.path}>
                {link.link}
              </NavLinks>
            ))}
            <NavLinks key="sign-up" path="/register">
              Sign Up{" "}
            </NavLinks>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
