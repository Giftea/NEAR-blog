import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ blog }) {
  const img = "https://i.imgur.com/Jo1AKdb.png";

  return (
    <Link to={`/blog/${blog?.id}`}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={img} alt="Blog Image" />
        <Box p="6" bg="white">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
            {blog?.title}
          </Box>
          <Box mt="1" fontWeight="light" as="p" lineHeight="tight" noOfLines={2}>
            {blog?.content}
          </Box>
          <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" mt={3}>
            {blog?.appreciationCount} Appreciations
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default Card;