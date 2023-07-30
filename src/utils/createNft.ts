

import { useWallet } from "@solana/wallet-adapter-react";
import {
  Metaplex,
  walletAdapterIdentity,
  bundlrStorage,
  toMetaplexFile,
} from "@metaplex-foundation/js";
import image from "../assets/imgs.png";

import { useCallback } from "react";

function useCreateCollection() {
  // const wallet = useWallet();
  // const connection = new Connection();

  // const createNft = useCallback(
  //   async (tokenName: any, Description: any, image: string) => {
  //     const file = toMetaplexFile("The content of my file", image);
  //     const imageUri = await metaplex.storage().upload(file);
  //     const { uri } = await metaplex.nfts().uploadMetadata({
  //       name: tokenName,
  //       description: Description,
  //       image: imageUri,
  //     });
  //   },
  //   [metaplex]
  // );
}
