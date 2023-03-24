import React, { useState } from "react";
import { Input, InputGroup, InputLeftElement, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchInput = ({ placeholder, control, setDentists }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    const filterArray = control.filter((item) =>
      item.tags.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log(filterArray);
    setDentists(filterArray);
  };

  return (
    <Box>
      <InputGroup display="flex" justifyContent="center">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon boxSize={8} />}
          transform="translateX(-50%)"
          position='absolute'
          top='30%'
          left='12%'
        />
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          borderRadius="3px"
          bg="white"
          height="8vh"
          width="60rem"
          type="text"
          placeholder={placeholder}
        />
      </InputGroup>

      <button  display="flex" justifyContent="center" onClick={handleClick}>
        search
      </button>
    </Box>
  );
};

export default SearchInput;
