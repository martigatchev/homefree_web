import { Text, Flex, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50" p={4}>
      <VStack spacing={6}>
        <Link href="/care_providers" _hover={{ textDecoration: "none" }}>
          <Text 
            color="blue.400" 
            fontSize="2xl" 
            fontWeight="semibold" 
            _hover={{ color: "blue.500", textDecoration: "underline" }}
          >
            Providers
          </Text>
        </Link>

        <Text fontSize="4xl" fontWeight="bold" color="gray.700">
          HOME PAGE
        </Text>
      </VStack>
    </Flex>
  );
}

