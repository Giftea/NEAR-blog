import React, { useEffect, useState } from "react";
import { Box, Divider, SimpleGrid } from "@chakra-ui/react";
import Card from "../components/BlogCard";
import { getBlogs } from "../near-blog-api";
import { Layout } from "../components/Layout";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setBlogs(await getBlogs());
      setLoading(false);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Layout>
      {" "}
      <Box borderColor="black">
        <Box mt="10" fontSize={24} fontWeight="semibold" as="h1">
          Latests Posts
        </Box>
        <Divider />
        {blogs.length === 0 && (
          <Box mt="10" fontSize={24} fontWeight="semibold" as="h1" textAlign="center">
            No Posts Found
          </Box>
        )}
        {loading ? (
          <Box mt="10" fontSize={24} fontWeight="semibold" as="h1" textAlign="center">
            Loading...
          </Box>
        ) : (
          <SimpleGrid mt="10" columns={2} spacing={10}>
            {blogs?.map((blog, index) => (
              <div key={index}>
                <Card blog={blog} />
              </div>
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
