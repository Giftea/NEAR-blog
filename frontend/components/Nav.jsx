import React from "react";
import { Flex, Spacer, Box, Button } from "@chakra-ui/react";
import { signInWithNearWallet, signOutNearWallet } from "../near-api";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ accountId }) => {
  let navigate = useNavigate();
  return (
    <Flex bg="blue.800" alignItems="center">
      <Box p="4" color="gray.50">
        <Link to="/">NEAR Blog</Link>
      </Box>
      <Spacer />
      <Box p="4">
        <Button onClick={() => navigate("/add")}>Add Post</Button>
      </Box>
      <Box p="4">
        {accountId ? (
          <Button style={{ float: "right" }} variant="link" onClick={signOutNearWallet}>
            Sign out {accountId}
          </Button>
        ) : (
          <Button style={{ float: "right" }}  colorScheme='teal' onClick={signInWithNearWallet}>
            Connect
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default Nav;