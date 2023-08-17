import { updateMint } from "./getWallets";
const mainOption = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    authorization: `Bearer ${import.meta.env.VITE_UNDERDOG_KEY}`,
  },
};
export const sendNfts = async (
  id: string,
  receiver: string,
  name: string,
  projectId: number,
  Image: string,
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
      receiverAddress: receiver,
    }),
  };
  try {
    const send = await fetch(
      `https://dev.underdogprotocol.com/v2/projects/c/${projectId}/nfts`,
      options
    );
    const datas = await send.json();
    if (datas.transactionId) {
      await updateMint(id, data.email, true);
      await sendMail(data.email, data.tiplink);
    }
    if (!datas.ok) {
      console.log(datas.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const sendMail = async (to: string, tiplink: string) => {
  const response = await fetch("http://localhost:3000/mail", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      to,
      tiplink,
    }),
  });
  const data = await response.json();
  if (!data.ok) {
    throw new Error("Email not sent");
  }
  if (data.ok) {
    return;
  }
};
// sendMail("favouralex084@gmail.com", "https://tiplink.io/i#3Gapde6FfpQJaFV5k");
// 957489817bc671.b5fc82fd42cd4c6c9b03f54d07114b69
