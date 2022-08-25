import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button, Box, Divider, Textarea } from "@chakra-ui/react";
import { createBlog } from "../near-blog-api";
import { Layout } from "../components/Layout";
import { useNavigate } from "react-router-dom"

const AddBlog = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    title: "",
    content: "",
    appreciationCost: '1',
  });

  const onChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    await navigate("/")
    createBlog(values);
  };

  return (
    <Layout>
      <Box borderColor="black">
        <Box mt="10" fontSize={24} fontWeight="semibold" as="h1">
          Add Blog
        </Box>
        <Divider />
        <FormControl mt="5" isRequired>
          <FormLabel>Title</FormLabel>
          <Input value={values.title} name="title" required onChange={onChange} bg="white" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Blog Content</FormLabel>
          <Textarea value={values.content} name="content" onChange={onChange} bg="white" />
        </FormControl>
        <FormControl mt="5" isRequired>
          <FormLabel>Appreciation Cost</FormLabel>
          <Input name="appreciationCost" value={values.appreciationCost} onChange={onChange} bg="white" />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit" onClick={onSubmit}>
          Publish
        </Button>
      </Box>
    </Layout>
  );
};

export default AddBlog;
