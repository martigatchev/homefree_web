"use client";

import { useState, useEffect } from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

const testimonials = [
  {
    image: "/images/Quote_1.png",
    text: "This is a wonderful service that truly made a difference in my family's life.",
    author: "— John Doe",
  },
  {
    image: "/images/Quote_2.png",
    text: "I have never experienced such compassionate care before.",
    author: "— Jane Smith",
  },
  {
    image: "/images/Quote_3.png",
    text: "The support and dedication from the team were outstanding.",
    author: "— Robert Brown",
  },
  {
    image: "/images/Quote_4.png",
    text: "Highly recommend this to anyone needing home care services.",
    author: "— Emily White",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box maxW="1440px" bg="cararra" height={{ base: "100%", md: "500px" }}>
      <Flex direction={{ base: "column", md: "row" }} align="stretch" height="100%">
        {/* 🔹 Image Section - Takes up 3/5ths */}
        <Box flex="3" height="100%" overflow="hidden">
          <Image
            src={testimonials[currentIndex].image}
            alt="Testimonial"
            objectFit="cover" // Ensures it fills the box and can be cropped
            width="100%"
            height={{ base: "400px", md: "100%" }} // Forces it to take up the full height of the parent
            transition="opacity 0.5s ease-in-out"
          />
        </Box>

        {/* 🔹 Text Section - Takes up 2/5ths */}
        <Box flex="2" px={{ base: 8, md: 0 }} py={{ base: 16, md: 0 }} pl={{ md: 12 }} pr={{ md: 6 }} display="flex" flexDirection="column" justifyContent="center" position="relative">
          <Text fontSize="2xl" color="woodland">
            {testimonials[currentIndex].text}
          </Text>
          <Text mt={4} fontSize="lg">
            {testimonials[currentIndex].author}
          </Text>

          {/* Carousel Dots (Positioned in Bottom Left of Text Box) */}
          <Box position="absolute" bottom={{ base: 8, md: "20px" }} left="0">
            <Flex gap={2} pl={12}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  w={3}
                  h={3}
                  borderRadius="full"
                  bg={index === currentIndex ? "woodland" : "white"} // Active is woodland, others are white
                  border="1px solid woodland" // Optional: Add border to make white dots more visible
                  transition="background 0.3s ease-in-out"
                />
              ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
