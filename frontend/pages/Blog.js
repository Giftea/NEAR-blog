import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Divider, Box, Button } from "@chakra-ui/react";
import { getBlog, appreciateBlog } from "../near-blog-api";
import { Layout } from "../components/Layout";
import { utils } from "near-api-js";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setBlog(await getBlog({ id: id }));
      setLoading(false);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const appreciate = async () => {
    await navigate("/");
    appreciateBlog(id, blog?.appreciationCost);
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <Layout>
      {loading ? (
        <Box mt="10" fontSize={24} fontWeight="semibold" as="h1" textAlign="center">
          Loading...
        </Box>
      ) : (
        <Box p="4" boxShadow="xl" rounded="md" bg="white" marginTop="10" py="5">
          <Box borderColor="black">
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>{blog?.title}</h1>
            <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" mt={3}>
              Written By {blog?.author}
            </Box>
            <Divider />
          </Box>

          <Box paddingTop="2rem">{blog?.content}</Box>
          <Box color="gray" my="3">
            <p>{blog?.appreciationCount} Appreciations</p>
          </Box>
          <Button onClick={appreciate}>Appreciate with {utils.format.formatNearAmount(blog?.appreciationCost)} NEAR</Button>
        </Box>
      )}
    </Layout>
  );
};

export default Blog;
