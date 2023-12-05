import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import FlexBetween from "../../components/FlexBetween";
import { AutoFixNormal, Close, Create, Home, Menu } from "@mui/icons-material";

const Page = ({ icon, text, selected }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={0.5}>
      {icon}
      <Typography
        sx={{ color: selected ? theme.palette.primary.main : "" }}
        variant="h6"
      >
        {text}
      </Typography>
    </Stack>
  );
};
const Navbar = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  return (
    <>
      <FlexBetween height="10%" width="100%">
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Stack
            display="flex"
            p={2}
            spacing={7}
            direction="row"
            alignItems="center"
          >
            <Box>
              <Typography variant="h1" fontWeight={700} color="primary">
                Logo
              </Typography>
            </Box>

            {isNonMobileScreen && (
              <>
                <Divider
                  orientation="vertical"
                  sx={{ bgcolor: "primary.main" }}
                />
                <Page icon={<Home color="primary" />} text="Home" selected />
                <Page icon={<Create color="text" />} text="Create" />
                <Page icon={<AutoFixNormal color="text" />} text="Edit" />
              </>
            )}
          </Stack>
          <Box height="47px">
            {isNonMobileScreen ? (
              <Button
                sx={{
                  width: "182px",
                  height: "47px",
                  borderRadius: "200px",
                  textTransform: "inherit",
                }}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            ) : (
              <IconButton
                onClick={() => {
                  setOpen(true);
                }}
              >
                <Menu sx={{ color: "primary.main" }} />
              </IconButton>
            )}
          </Box>
          <Drawer
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <Box
              bgcolor={theme.palette.grey.main}
              maxWidth="500px"
              height="100%"
              minWidth="300px"
            >
              <Box display="flex" justifyContent="flex-end" p="1rem">
                <IconButton
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Close sx={{ color: "primary.main" }} />
                </IconButton>
              </Box>
              <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <Home sx={{ fontSize: "30px", color: "primary.main" }} />
                    </ListItemIcon>
                    <Typography color="primary" variant="h4">
                      Home
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <Create sx={{ fontSize: "30px", color: "text.main" }} />
                    </ListItemIcon>
                    <Typography variant="h4">Create</Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <AutoFixNormal
                        sx={{ fontSize: "30px", color: "text.main" }}
                      />
                    </ListItemIcon>
                    <Typography variant="h4">Edit</Typography>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Container>
      </FlexBetween>
    </>
  );
};

export default Navbar;
