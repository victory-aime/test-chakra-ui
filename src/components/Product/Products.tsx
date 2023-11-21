"use client";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  SimpleGrid,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const data = [
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
];

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ProductSimple({ product }) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {product.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={product.imageURL}
          alt={`Picture of ${product.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {product.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {product.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                £
              </Box>
              {product.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

function ProductList() {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={4} p={4}>
      {data.map((product, index) => (
        <ProductSimple key={index} product={product} />
      ))}
    </SimpleGrid>
  );
}

export default ProductList;
