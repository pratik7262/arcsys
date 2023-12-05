import { AddCircle } from "@mui/icons-material";
import { Button, Divider, List, Stack, Typography } from "@mui/material";
import { IoLogoWechat } from "react-icons/io5";
import React from "react";
import Chat from "./Chat";
import { userData } from "../data/data";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Typography fontWeight="400" variant="h3">
        ALL YOUR CHATS
      </Typography>
      <Button
        sx={{ marginY: 2, textTransform: "inherit" }}
        variant="contained"
        startIcon={<IoLogoWechat />}
      >
        Chat Images:ON
      </Button>
      <Typography fontWeight={400} color="text.main">
        When a bot sends you images, you will be charged one secondary image
      </Typography>
      <List sx={{ width: "100%" }}>
        {userData.map((user) => {
          return (
            <>
              <Link
                style={{ textDecoration: "none", color: "#FFF" }}
                to={`/chat/${user.chat}`}
              >
                <Chat key={user.name} user={user} />
              </Link>
            </>
          );
        })}
      </List>
      <Divider sx={{ bgcolor: "text.main", my: 2 }} />
      <Stack spacing={2} sx={{ alignItems: "center" }} direction="row">
        <AddCircle sx={{ color: "primary.main" }} />
        <Typography variant="h6">Create new bot</Typography>
      </Stack>{" "}
      Aliquam, accusamus debitis inventore enim, eligendi dicta ipsam commodi
      laudantium nesciunt ab possimus ipsa eveniet illum odit repudiandae, eum
      accusantium magnam ut?
    </>
  );
};

export default Dashboard;
