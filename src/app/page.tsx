import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  return (
    <Flex minH="100vh" align="center" justify="center">
      <Box>
        <Link href="/care_providers" color="blue.400" _hover={{ color: "blue.500" }}>
        <Text color="blue.400" _hover={{ color: "blue.500", textDecoration: "underline" }}>
            Providers
          </Text>
        </Link>
      </Box>
      <Box>
        <Text fontSize="4xl" fontWeight="bold">
          HOME PAGE
        </Text>
      </Box>
    </Flex>
  );
}
