import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import FlexBetween from "../../components/FlexBetween";
import { Send } from "@mui/icons-material";
import Message from "./Message";
import Dashboard from "../../components/Dashboard";
import { useParams } from "react-router-dom";
import { caressaJessalin, lettyBride } from "../../data/data";

const ChatBox = () => {
  const { array } = useParams();
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    if (array === "caressaJessalin") {
      setMessages(caressaJessalin);
      setName("Caressa Jessalin");
    } else if (array === "lettyBride") {
      setMessages(lettyBride);
      setName("Letty Bride");
    }
  }, [array]);

  return (
    <FlexBetween width="100%" height="80%">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Stack
          width="30%"
          bgcolor="grey.main"
          borderRadius="10px"
          sx={{ display: { xs: "none", sm: "flex" } }}
          height="100%"
          p={2}
        >
          <Dashboard />
        </Stack>
        <Stack
          sx={{ width: { xs: "100%", sm: "68%" } }}
          bgcolor="grey.main"
          borderRadius="10px"
          height="100%"
        >
          <FlexBetween
            px="1rem"
            width="100%"
            bgcolor="secondary.main"
            height="10%"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <Typography variant="h6">{name}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Button
                variant="text"
                color="text"
                sx={{ textTransform: "inherit" }}
                startIcon={<IoArrowBackCircle />}
              >
                Back
              </Button>
              <Button
                variant="text"
                color="text"
                sx={{ textTransform: "inherit" }}
                startIcon={<MdDelete />}
              >
                Delete
              </Button>
            </Stack>
          </FlexBetween>
          <Stack sx={{ overflowY: "auto" }} width="100%" pt={1} height="80%">
            {messages.map((message, index) => {
              return <Message message={message} />;
            })}
          </Stack>
          <FlexBetween px={1} width="100%" height="10%">
            <Box
              width="95%"
              padding="0.1rem 1.5rem"
              bgcolor="secondary.main"
              borderRadius="70px"
              color="text.main"
            >
              <InputBase
                fullWidth
                sx={{ color: "text.main" }}
                placeholder="Message"
              />
            </Box>
            <IconButton>
              <Send fontSize="30px" sx={{ color: "primary.main" }} />
            </IconButton>
          </FlexBetween>
        </Stack>
      </Container>
    </FlexBetween>
  );
};

export default ChatBox;
