import {
  Box,
  Text,
  Flex,
  Button,
  Input,
  Image,
  Link,

} from "@chakra-ui/react";
import TestimonialSection from "@/components/testimonial_section";
import Footer from "@/components/footer";

export default function CareProvidersPage() {
  return (
    <Box width="100%" bg="blue.50">
      {/* 🔹 Top Navigation Bar */}
      <Box
        as="header"
        bg="woodland"
        color="white"
        py={3}
        px={{ base: 3, md: 6 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }} // Stack logo above on small screens
          justify={{ base: "center", md: "space-between" }}
          align="center"
          maxW="1440px"
          mx="auto"
          px={{ base: 0, md: 6 }}
        >
          {/* 🔹 Logo */}
          <Image
            src="/images/homefree_logo.png"
            alt="HomeFree Logo"
            height={{ base: "25px", md: "35px" }}
            objectFit="contain"
            display="block"
            mb={{ base: 4, md: 0 }} // Add space below logo on small screens
          />

          {/* 🔹 Navigation Links */}
          <Flex
            direction="row" // Always keep links in a row
            gap={{ base: 4, md: 6 }} // Adjust gap for spacing
            justify={{ base: "center", md: "flex-end" }} // Center links on small screens
            align="center"
            className="font-maitree"
            fontSize={{ base: "10px", md: "md" }}
          >
            <Text
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              textAlign="center"
            >
              Resources
            </Text>
            <Text
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              textAlign="center"
            >
              Talk to a Care Professional
            </Text>
            <Text
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              textAlign="center"
            >
              Call Us | (403) 902-2186
            </Text>
          </Flex>
        </Flex>
      </Box>

      {/* 🔹 Caretaker Section */}
      <Box width="100%" bg="cararra">
      <Box
  width="100%"
  bgImage={{
    base: "url('/images/mobile_layout_form_background.png')", // Image for small screens
    md: "url('/images/background_frame.png')"      // Default image for medium and larger screens
  }}
  bgSize="cover"
  bgPosition="center"
  position="relative"
>
          {/* 🔹 Caretaker Content */}
          <Box
            maxW="1440px"
            mx="auto"
            px={{ base: 8, md: 24 }}
            py={{ base: 16, md: 24 }}
            position="relative"
            zIndex={1}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="space-between"
            >
              {/* Left Text Content (2/3 width) */}
              <Box flex={{ base: "1", md: "2" }} pr={{ md: 8 }}>
                <Text
                  fontSize={{ base: "4xl", md: "6xl" }}
                  fontWeight={{ base: "bold", md: "normal" }}
                  color="woodland"
                  className="font-maitree"
                  lineHeight="shorter"
                >
                  Better Homecare Starts With Exceptional Care Workers
                </Text>

                <Text
                  mt={4}
                  fontSize={{ base: "xl", md: "lg" }}
                  color="woodland"
                  className="font-maitree"
                >
                  At HomeFree your work is valued, your impact is meaningful,
                  and together, we help loved ones thrive at home with dignity
                  and care.
                </Text>
              </Box>

              {/* 🔹 Translucent Registration Form (1/3 width) */}
              <Box
                flex={{ base: "1", md: "1" }}
                bg="rgba(255, 255, 255, 0.5)" // Slightly more opaque for readability
                mt={{ base: 8, md: 0 }}
                p={6}
                borderRadius="lg"
                shadow="md"
                backdropFilter="blur(10px)" // Adds the blurred effect
                border="1px solid rgba(255, 255, 255, 0.4)" // Subtle border
                position="relative"
                zIndex={2} // Ensures form stays in front of the semi-circle
                className="font-maitree"
              >
                <Text
                  fontSize={{ base: "2xl", md: "4xl" }}
                  color="woodland"
                  className="font-maitree"
                >
                  Become a CarePartner
                </Text>
                <Text
                  fontSize="md"
                  color="woodland"
                  className="font-maitree"
                  mt={1}
                >
                  Receive job requests directly by registering today.
                </Text>
                <Flex direction="column" gap={3} mt={4}>
                  {/* First Name & Last Name */}
                  <Flex direction={{ base: "column", md: "row" }} gap={3}>
                    <Input placeholder="First Name*" bg="white" />
                    <Input placeholder="Last Name*" bg="white" />
                  </Flex>

                  {/* Email */}
                  <Input placeholder="Email Address*" bg="white" />

                  {/* Mobile Number */}
                  <Input placeholder="Mobile Number*" bg="white" />

                  {/* Address */}
                  <Input placeholder="Address*" bg="white" />

                  {/* City & Postal Code */}
                  <Flex direction={{ base: "column", md: "row" }} gap={3}>
                    <Input placeholder="City*" bg="white" />
                    <Input placeholder="Postal Code*" bg="white" />
                  </Flex>

                  {/* Submit Button */}
                  <Button
                    my={{ base: 4, md: 0 }}
                    bg="woodland"
                    color="white"
                    _hover={{ bg: "primary" }}
                  >
                    Get Started
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>

      {/* 🔹 New Section: Stigma-Free Homecare */}
      <Box width="100%" bg="periwinkleGray" zIndex={1}>
        <Box
          maxW="1440px"
          mx="auto"
          px={6}
          py={10}
          bg="periwinkleGray"
          textAlign="center"
        >
          <Box maxW="800px" mx="auto" textAlign="center">
            <Text
              fontSize={{ base: "xl", md: "3xl" }}
              fontWeight="bold"
              color="shark"
              className="font-maitree"
            >
              At HomeFree, we provide simple, stigma-free homecare with a
              personal touch, so families can relax and loved ones can continue
              enjoying life at home.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* 🔹 New Section: "Care That Cares for You" */}
      <Box
        bg="white"
        height={{ base: "100%", md: "650px" }}
        display="flex"
        alignItems="center" // Centers vertically (Y-axis)
        justifyContent="center" // Centers horizontally (X-axis)
        textAlign="center" // Ensures text is centered inside
      >
        <Box maxW="1600px" mx="auto" px={6} py={12} bg="white" zIndex={1}>
          {/* Left-aligned Title */}
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight={{ base: "bold", md: "normal" }}
              color="shark"
              className="font-maitree"
            >
              Care That Cares for You
            </Text>
          </Box>

          <Flex justify="center" align="center" wrap="wrap" mt={8} gap={0}>
            {/* Card 1 */}
            <Box textAlign="center" px={4} maxW="325px">
              <Image
                src="/images/Valued.png"
                alt="Valued Icon"
                mx="auto"
                my={{ base: 6, md: 4 }}  // Ensure no top margin on small screens
                height="150px"
              />
              <Text
                textAlign={{ base: "center", md: "left" }}
                fontSize="2xl"
                className="font-maitree"
              >
                Be valued for the meaningful work you do.
              </Text>
            </Box>

            {/* Card 2 */}
            <Box textAlign="center" px={4} maxW="325px">
              <Image
                src="/images/Money.png"
                alt="Money Icon"
                mx="auto"
                my={{ base: 6, md: 4 }}
                height="150px"
              />
              <Text textAlign={{ base: "center", md: "left" }} fontSize="2xl" className="font-maitree">
                Earn competitive pay with great benefits.
              </Text>
            </Box>

            {/* Card 3 */}
            <Box textAlign="center" px={4} maxW="325px">
              <Image
                src="/images/Healthcare.png"
                alt="Healthcare Icon"
                mx="auto"
                my={{ base: 6, md: 4 }}
                height="150px"
              />
              <Text textAlign={{ base: "center", md: "left" }} fontSize="2xl" className="font-maitree">
                Enjoy a career that makes a real difference.
              </Text>
            </Box>

            {/* Card 4 */}
            <Box textAlign={{ base: "center", md: "left" }} px={4} maxW="325px">
              <Image
                src="/images/Wellbeing.png"
                alt="Wellbeing Icon"
                mx="auto"
                my={{ base: 6, md: 4 }}
                height="150px"
              />
              <Text textAlign={{ base: "center", md: "left" }} fontSize="2xl" className="font-maitree">
                Work in an environment that values your well-being.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* 🔹 "Ready to Get Started?" Section */}
      <Box
        bg="woodland"
        color="white"
        py={12}
        textAlign="center"
        className="font-maitree"
      >
        <Flex justify="center" align="center" gap={6} wrap="wrap">
          <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight={{ base: "bold", md: "normal" }}>
            Ready to Get Started?
          </Text>
          <Button
            bg="turmeric"
            color="white"
            px={6}
            py={3}
            fontSize="lg"
            _hover={{ bg: "primary" }}
            fontWeight={"normal"}
          >
            Become a CarePartner
          </Button>
        </Flex>
      </Box>

      {/* 🔹 Testimonial Section */}
      <Box bg="cararra">
        <Box maxW="1440px" mx="auto" bg="cararra" className="font-maitree">
          <TestimonialSection />
        </Box>
      </Box>


      {/* 🔹 "Still Have Questions?" Section */}
      <Box
        width="100%"
        height={{ base: "100%", md: "400px" }}
        bgImage={{
          base: "url('/images/mobile_layout_questions_background.png')", // Image for small screens
          md: "url('/images/background_frame2.png')"      // Default image for medium and larger screens
        }}
        bgSize="cover"
        bgPosition="center"
        position="relative"
        display="flex"
        alignItems="center" // 🔹 Centers content vertically
        justifyContent="center" // 🔹 Centers content horizontally
        className="font-maitree"
      >
        <Box maxW="1440px" width="100%" mx="auto" px={{ base: 12, md: 24 }} py={{ base: 24, md: 0 }}>
          <Flex direction={{ base: "column", md: "row" }} align={{ base: "left", md: "center" }}>
            {/* Left Side: Text */}
            <Box flex="1">
              <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight={{ base: "bold", md: "normal" }} color="shark">
                Still Have Questions?
              </Text>
              <Text fontSize="lg" color="gray.600" mt={2}>
                Not sure if HomeFree is right for you or have questions about
                joining our team? We’re here to help! Visit our{" "}
                <Link href="#" color="woodland" fontWeight="bold">
                  Contact Page
                </Link>{" "}
                to get in touch, and we’ll be happy to provide the answers you
                need.
              </Text>
            </Box>

            {/* Right Side: Decorative Element */}
            <Box flex="1" display="flex" justifyContent="center">
              <Image
                src="/images/question-section-graphic.png"
                alt=""
                maxW="300px"
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* 🔹 Footer Section */}
      <Footer />

      
    </Box>
  );
}
