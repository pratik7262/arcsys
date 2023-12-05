import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ChatBox from "./scenes/ChatBox";
import Home from "./scenes/Home";
import Navbar from "./scenes/Navbar";

function App() {
  return (
    <div className="app">
      <Box bgcolor="backgroud" sx={{ height: "100vh", width: "100vw", p: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:array" element={<ChatBox />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
