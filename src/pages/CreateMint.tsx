import { FC, useEffect, useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import getWallet, { updateMint } from "../services/getWallets";
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
  const getandSetButton = async () => {
    const [{ emailWallet }] = await getWallet(id);
    const wallet = emailWallet.filter(
      (e: { minted: boolean }) => e.minted === false
    );
    emailWallet.length > 0 && wallet.length === 0
      ? setAllminted(true)
      : setAllminted(false);
    return;
  };
  useEffect(() => {
    getandSetButton();
  }, [allminted]);
  let loadingText: string;
  const mainOption = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${import.meta.env.VITE_UNDERDOG_KEY}`,
    },
  };

  const Collection = async () => {
    const options = {
      ...mainOption,
      body: JSON.stringify({
        name: symbol,
        symbol: "ME",
        description: desc,
        image: Image,
        transferable: false,
        compressed: true,
        isPublic: true,
      }),
    };
    try {
      const create = await fetch(
        "https://dev.underdogprotocol.com/v2/projects",
        options
      );
      const data = await create.json();
      console.log(data);

      toast({
        title: `Created Your Collection`,
        description: ` This is the mint Address:${data.mintAddress}`,
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      return data.projectId;
    } catch (error) {
      toast({
        title: ` Error`,
        description: "Couldnt Create Collection for Events",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const sendNfts = async (
    reciever: string,
    name: string,
    projectId: number,
    data: {
      email: string;
      tiplink: string;
      publickey: string;
      minted: boolean;
    }
  ) => {
    const options = {
      ...mainOption,
      body: JSON.stringify({
        name: name,
        symbol: "ME",
        image: Image,
        receiverAddress: reciever,
      }),
    };
    const send = await fetch(
      `https://dev.underdogprotocol.com/v2/projects/c/${projectId}/nfts`,
      options
    );
    const sent = await send.json();
    if (sent.transactionId) {
      await updateMint(id, data.email, true);
    }
  };
  const Onclicks = async () => {
    const projectId = await Collection();
    const [{ emailWallet }] = await getWallet(id);
    setTimeout(async function () {
      const wallet = emailWallet.filter(
        (e: { minted: boolean }) => e.minted === false
      );
      wallet.forEach(
        async (e: {
          publickey: string;
          email?: string;
          tiplink?: string;
          minted?: boolean;
        }) => {
          await sendNfts(e.publickey, symbol, projectId, e);
        }
      );
      await getandSetButton();
    }, 20000);
  };
  return (
    <>
      <Button isLoading={allminted} bg={"whatsapp.300"} onClick={Onclicks}>
        {"Send Invites"}
      </Button>
    </>
  );
};

export default SendInvite;
//  filter all wallets the nfts with minting false
// send to all the wallets that has minting false and set minting true
// if all minting is sent set button to all wallets sent and disable button
// if all wallets are not set button to how many wallets did not recieve and set wallet button to complete mint
