import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Chat = ({ user }) => {
  return (
    <>
      <ListItem
        sx={{
          bgcolor: "secondary.main",
          my: 1,
          borderRadius: "150px",
        }}
        alignItems="flex-start"
      >
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary={user.name}
          secondary={
            <Typography variant="caption">{user.secondaryText}</Typography>
          }
        />
      </ListItem>
    </>
  );
};

export default Chat;
