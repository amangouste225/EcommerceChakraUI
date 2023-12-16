import {
  Flex,
  Circle,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Box,
  Stack,
  Link,
  HStack,
  Text,
} from "@chakra-ui/react";

import { FiShoppingCart } from "react-icons/fi";
import { Link as ReactLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Rating = ({ rating, numReviews }) => {
  const { iconSize, setIconSize } = useState("13px");
  return (
    <Flex>
      <HStack spacing="1px">
        <StarIcon size={iconSize} w="13px" color="orange.500" />
        <StarIcon
          size={iconSize}
          w="13px"
          color={rating >= 2 ? "orange.500" : "black"}
        />
        <StarIcon
          size={iconSize}
          w="13px"
          color={rating >= 3 ? "orange.500" : "black"}
        />
        <StarIcon
          size={iconSize}
          w="13px"
          color={rating >= 4 ? "orange.500" : "black"}
        />
        <StarIcon
          size={iconSize}
          w="13px"
          color={rating >= 5 ? "orange.500" : "black"}
        />

        <Text fontSize="md" fontWeight="norm" ml="4px">
          ( {numReviews} )
        </Text>
      </HStack>
    </Flex>
  );
};

export const ProductsCard = ({ product }) => {
  return (
    <Stack
      p="2"
      spacing="3"
      bg={useColorModeValue("orange.100", "gray.800")}
      minW="280px"
      h="300px"
      borderWidth="1px"
      rounded="lg"
      shadow="xl"
      position="relative"
    >
      {product.isNew && (
        <Circle
          size="10px"
          position="absolute"
          top={4}
          right={4}
          bg="green.300"
        />
      )}

      {product.stock <= 0 && (
        <Circle
          size="10px"
          position="absolute"
          top={4}
          right={4}
          bg="red.300"
        />
      )}

      <Image src={product.image} alt={product.name} rounded="md" bg="white" />
      <Box flex="1" maxH="15px" alignItems="baseline">
        {product.stock <= 0 && (
          <Badge rounded="full" px="1" fontSize="0.8em" colorScheme="rd">
            Sold out
          </Badge>
        )}
        {product.isNew && (
          <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
            Sold out
          </Badge>
        )}
      </Box>
      <Flex mt="0" justifyContent="space-between" alignContent="center">
        <Link as={ReactLink} to={`/product/${product._id}`} cursor="pointer">
          <Box
            fontSize="xl"
            px="2"
            fontWeight="semibold"
            textTransform="capitalize"
            lineHeight="tight"
          >
            {product.name}
          </Box>
        </Link>

        <Flex justifyContent="space-between" alignContent="center">
          <Rating rating={product.ratings} numReviews={product.numReviews} />
        </Flex>
      </Flex>
      <Flex justify="space-between" px="2" py="0" fontWeight="bold">
        <Box
          fontSize="2xl"
          color={useColorModeValue("gray.800", "white")}
          py="0"
        >
          <Box as="span" color={"gray.500"} fontSize="lg" lineHeight="tight">
            $
          </Box>
          {product.price.toFixed(2)}
        </Box>
        <Tooltip
          label="Add to cart"
          bg="white"
          placement="top"
          color="gray.800"
          fontSize="0.7em"
        >
          <Button variant="ghost" display="flex" disabled={product.stock <= 0}>
            <Icon as={FiShoppingCart} h={5} w={5} alignSelf="center" />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};
