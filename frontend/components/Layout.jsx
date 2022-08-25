import { ChakraProvider, Container } from "@chakra-ui/react";
import Nav from "./Nav";

export const Layout = ({ children }) => {
    return (
      <ChakraProvider>
        <Nav accountId={window.accountId} />
        <Container>{children}</Container>
      </ChakraProvider>
    );
  };
