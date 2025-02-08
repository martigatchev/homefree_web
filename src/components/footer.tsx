import { Box, Flex, Image, Text, Input, Button, List, ListItem, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box className="font-maitree" bg="woodland" color="white" py={12} px={{ base: 12, md: 24 }}>
      <Flex
        maxW="1440px"
        mx="auto"
        justify="space-between"
        align={{ base: "center", md: "stretch" }}
        direction={{ base: "column", md: "row" }} // Stack vertically on small screens
        gap={{ base: 8, md: 0 }} // Add spacing between sections on small screens
      >
        {/* 🔹 Left Section - Logo & Subscription (1/2 width) */}
        <Box
  flex={{ base: "1", md: "2" }}
  display="flex"
  flexDirection="column"
  justifyContent="space-between"
  alignItems={{ base: "center", md: "flex-start" }} // Center items on small screens, left-align on larger screens
>
          <Image
  src="/images/homefree_logo.png"
  alt="HomeFree Logo"
  height="35px"
  objectFit="contain"
  mx={{ base: "auto", md: "0" }} // Center on small screens, align left on medium and larger
/>

          <Box textAlign={{ base: "center", md: "left" }}>
            <Text mt={2}>Want to Chat?</Text>
            <Flex mt={3} gap={2} direction={{ base: "column", md: "row" }}>
              <Input
                placeholder="Your Email"
                bg="white"
                color="black"
                borderRadius="md"
                flex="1"
              />
              <Button
                bg="turmeric"
                color="white"
                fontWeight="normal"
                w={{ base: "100%", md: "150px" }}
                _hover={{ bg: "primary" }}
              >
                Subscribe
              </Button>
            </Flex>
          </Box>
        </Box>

        {/* 🔹 Middle Section - Services (1/4 width) - Hidden on small screens */}
        <Box flex="1" textAlign="left" display={{ base: "none", md: "block" }}>
          <Text fontSize="2xl" mb={3}>Services</Text>
          <List spacing={2} styleType="disc" listStylePosition="inside">
            {["Companionship", "Personal Care", "Complex Care", "Post Operation Rehabilitation"].map((service, index) => (
              <ListItem key={index} color="turmeric">
                <Text as="span" color="white">{service}</Text>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* 🔹 Right Section - Info (1/4 width) */}
        <Box flex="1" textAlign="left">
          <Text fontSize="2xl" mb={3}>Info</Text>
          <List spacing={2} styleType="disc" listStylePosition="inside" fontWeight="bold">
            <ListItem color="turmeric">
              <Text as="span" color="white">(403) 902-2180</Text>
            </ListItem>
            <ListItem color="turmeric">
              <Text as="span" color="white">hi@homefree.care</Text>
            </ListItem>
            <ListItem color="turmeric">
              <Link href="#" color="white" _hover={{ textDecoration: "underline" }}>
                Privacy Policy
              </Link>
            </ListItem>
            <ListItem color="turmeric">
              <Link href="#" color="white" _hover={{ textDecoration: "underline" }}>
                Terms and Conditions
              </Link>
            </ListItem>
          </List>
        </Box>
      </Flex>

      {/* 🔹 Copyright Section at Bottom */}
      <Box mt={6} borderTop="1px solid #A0A09F" pt={4} textAlign="center">
        <Text fontSize="sm">© 2024 HomeFree Care Company. All Rights Reserved.</Text>
      </Box>
    </Box>
  );
}
