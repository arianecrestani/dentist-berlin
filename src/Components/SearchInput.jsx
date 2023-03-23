import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchInput = ({ placeholder }) => {
  return (
    <InputGroup display="flex" justifyContent="center">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon  boxSize={6} />}
        transform="translateX(-50%)"
        left="18%"
      />
      <Input
        borderRadius="3px"
        bg="white"
        height="8vh"
        width="60rem"
        type="text"
        placeholder={placeholder}
      />
    </InputGroup>
  );
};

export default SearchInput;
