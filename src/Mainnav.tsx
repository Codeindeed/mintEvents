import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";

function Mainnav() {
  const { wallet, publicKey } = useWallet();
  const navigate = useNavigate();
  useEffect(() => {
    if (wallet && publicKey) navigate(`/Create/${publicKey}`);
    return;
  }, [navigate, publicKey, wallet]);
  return (
    <Box
      as={"main"}
      w={["80rem", "100%"]}
      bg={"#F8F9FF"}
      flexDirection={"column"}
      display={"flex"}
      alignItems={"center"}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default Mainnav;
