import { LocalPostOffice } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Dashboard from "../../components/Dashboard";
import FlexBetween from "../../components/FlexBetween";

const Home = () => {
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
          //   width="30%"
          sx={{ width: { xs: "100%", sm: "30%" } }}
          bgcolor="grey.main"
          borderRadius="10px"
          height="100%"
          p={2}
        >
          <Dashboard />
        </Stack>
        <Stack
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
          width="68%"
          bgcolor="grey.main"
          borderRadius="10px"
          height="100%"
        >
          <LocalPostOffice sx={{ color: "primary.main", fontSize: 90 }} />
          <Typography variant="h4">Your messages </Typography>
          <Typography variant="h6">
            Click On Any Chat To See Messages
          </Typography>
        </Stack>
      </Container>
    </FlexBetween>
  );
};

export default Home;
