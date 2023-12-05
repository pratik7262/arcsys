import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { img } from "../../data/data";

const Message = ({ message }) => {
  return (
    <Stack
      px={1}
      width="100%"
      my={1}
      spacing={1}
      direction={message.sender ? "row" : "row-reverse"}
    >
      <Avatar
        alt="Remy Sharp"
        src={
          message.sender ? "https://mui.com/static/images/avatar/1.jpg" : img
        }
      />
      <Box
        maxWidth="50%"
        bgcolor={message.sender ? "secondary.main" : "primary.main"}
        borderRadius={
          message.sender ? "12px 12px 12px 0px" : "12px 12px 0px 12px"
        }
        padding={2}
      >
        <Typography color={message.sender ? "text.main" : "black"}>
          {message.text}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Message;
