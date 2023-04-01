import React from "react";
import { Comment } from "../Components/Comment";
import { Box, HStack} from "@chakra-ui/react";

export const UserArea = ({ item, index }) => {
  return (
    <div>
      <Box display="flex" justifyContent="end">
        <HStack>
          <Comment item={item} index={index} />
        </HStack>
      </Box>
    </div>
  );
};
