import React, { useState } from "react";
import { Input, InputGroup, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchDentists = ({ placeholder, control, setDentists }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    const filterArray = control.filter((item) =>
      item.tags.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log(filterArray);
    setDentists(filterArray);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="start"
      background="yellow.200"
    >
      <InputGroup display="flex">
        <Input
          flex="1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          bg="white"
          height="8vh"
          width="45rem"
          type="text"
          placeholder={placeholder}
          borderRadius="lg"
        />
      </InputGroup>

      <SearchIcon
        boxSize={10}
        margin={3}
        display="flex"
        justifyContent=""
        onClick={handleClick}
      >
        search
      </SearchIcon>
    </Box>
  );
};

export default SearchDentists;
