import { FC, useCallback, useEffect, useState } from "react";
import { Box, Spinner, useToast } from "@chakra-ui/react";
import getWallet from "../services/getWallets";
import { sendNfts } from "../services/sendNfts";

interface InviteProps {
  desc: string;
  symbol: string;
  Image: string;
  id: string;
}

const SendInvite: FC<InviteProps> = ({ desc, symbol, Image, id }) => {
  const toast = useToast();
  const [loadings, setisLoading] = useState<boolean>(false);
  const [allminted, setAllminted] = useState<boolean>(false);

  const getandSetButton = useCallback(async () => {
    const [{ emailWallet }] = await getWallet(id);
    const wallet = emailWallet.filter(
      (e: { minted: boolean }) => e.minted === false
    );
    emailWallet.length > 0 && wallet.length === 0
      ? setAllminted(true)
      : setAllminted(false);
    setisLoading(true);
    return;
  }, [id]);
  useEffect(() => {
    getandSetButton();
  }, [allminted, getandSetButton]);
  const mainOption = {
    method: "POST",

    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${import.meta.env.VITE_UNDERDOG_MAINNET_KEY}`,
    },
  };

  const Collection = async () => {
    setisLoading(false);
    const options = {
      ...mainOption,
      body: JSON.stringify({
        name: symbol,
        symbol: "ME",
        description: desc,
        image: Image,
      }),
    };
    try {
      const create = await fetch(
        import.meta.env.VITE_UNDERDOG_PROJECT_URL_MAINNET,
        options
      );
      const data = await create.json();
      toast({
        title: `Created Your Collection`,
        description: ` This is the mint Address:${data.mintAddress}`,
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      if (data.mintAddress) {
        setTimeout(async () => {
          const [{ emailWallet }] = await getWallet(id);
          const wallet = emailWallet.filter(
            (e: { minted: boolean }) => e.minted === false
          );
          for (let index = 0; index < wallet.length; index++) {
            const element = wallet[index];
            await sendNfts(
              id,
              element.publickey,
              symbol,
              data.projectId,
              Image,
              element
            );
          }
          setisLoading(true);
          await getandSetButton();
        }, 30000);
      }
      return;
    } catch (error) {
      console.log(error);
      toast({
        title: ` Error`,
        description: "Couldnt Create Collection for Events",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setisLoading(true);
    }
  };
  const Onclicks = async () => {
    await Collection();
  };
  return (
    <>
      <Box
        as={"button"}
        height={"1rem"}
        display={"flex"}
        alignItems={"center"}
        p={"1.7rem"}
        borderRadius={"5rem"}
        _disabled={{ bg: "#ebedf0" }}
        _hover={{
          bg: "#32724C",
          color: "#fff",
          boxShadow:
            "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)",
        }}
        disabled={allminted}
        bg={"#65e495"}
        onClick={Onclicks}
      >
        {!loadings && <Spinner></Spinner>}
        {loadings && !allminted && "Send Invite"}
        {loadings && allminted && "All Invites Sent"}
      </Box>
    </>
  );
};

export default SendInvite;
