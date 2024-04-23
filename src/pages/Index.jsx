import { Box, Button, Container, Flex, Heading, Input, Text, VStack, Image, Link, SimpleGrid, Textarea } from "@chakra-ui/react";
import { FaUpload, FaChartBar, FaBrain, FaCheckCircle, FaCode } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          4-Digit Predictor: A Data-Driven Approach to Number Forecasting
        </Heading>
        <Text fontSize="xl">Welcome to the 4-Digit Predictor, a web-based application that leverages historical data and machine learning algorithms to forecast 4-digit numbers.</Text>

        <SimpleGrid columns={2} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md">Data Upload</Heading>
            <Text mt={4}>Upload your dataset in CSV format.</Text>
            <Input placeholder="Upload CSV" size="md" mt={3} type="file" />
            <Button leftIcon={<FaUpload />} colorScheme="blue" mt={3}>
              Upload
            </Button>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md">Data Visualization</Heading>
            <Text mt={4}>Explore trends and patterns in your data.</Text>
            <Button leftIcon={<FaChartBar />} colorScheme="teal" mt={3}>
              View Charts
            </Button>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md">Machine Learning Model</Heading>
            <Text mt={4}>Our model predicts future 4-digit numbers.</Text>
            <Button leftIcon={<FaBrain />} colorScheme="purple" mt={3}>
              Train Model
            </Button>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md">Prediction Results</Heading>
            <Text mt={4}>View the predicted numbers and confidence scores.</Text>
            <Button leftIcon={<FaCheckCircle />} colorScheme="green" mt={3}>
              Get Predictions
            </Button>
          </Box>
        </SimpleGrid>

        <Flex align="center" justify="space-between" w="full">
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md">API Integration</Heading>
            <Text mt={4}>Integrate our model into your applications.</Text>
            <Button leftIcon={<FaCode />} colorScheme="orange" mt={3}>
              Access API
            </Button>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md">About Us</Heading>
            <Text mt={4}>Learn more about our mission and team.</Text>
            <Button colorScheme="pink" mt={3}>
              Read More
            </Button>
          </Box>
        </Flex>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md">Disclaimer</Heading>
          <Text mt={4}>While we strive to provide accurate predictions, there is no guarantee of accuracy and the tool should be used responsibly.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
