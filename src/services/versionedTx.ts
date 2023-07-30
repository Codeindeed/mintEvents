import {
  createCreateMetadataAccountV3Instruction,
  createCreateMasterEditionV3Instruction,
  createSetCollectionSizeInstruction,
  PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
} from "@metaplex-foundation/mpl-token-metadata";
import { Buffer } from "buffer";
import {
  createAccount,
  createMint,
  mintTo,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
  Connection,
  Keypair,
  PublicKey,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
const helius =
  "https://devnet.helius-rpc.com/?api-key=cbd4ff00-9e14-4751-9a02-9ea4a5948467";

async function versionedTx(uri: string, publicKey: PublicKey) {
  const keypair = Keypair.fromSecretKey(
    new Uint8Array(import.meta.env.SECRET || "")
  );
  const connection = new Connection(import.meta.env.HELIUS_RPC);
  const slot = await connection.getSlot();
  const block = await connection.getBlock(slot, {
    maxSupportedTransactionVersion: 0,
  });
  const blockHash = await connection
    .getLatestBlockhash()
    .then((res) => res.blockhash);

  const collectionMint = await createMint(
    connection,
    keypair,
    publicKey,
    publicKey,
    0,
    keypair,
    { commitment: "finalized" },
    TOKEN_PROGRAM_ID
  );
  console.log(`createmint ${collectionMint.toBase58()}`);
  const collectionTokenAccount = await createAccount(
    connection,
    keypair,
    collectionMint,
    publicKey,
    undefined,
    { commitment: "finalized" },
    TOKEN_PROGRAM_ID
  );
  await mintTo(
    connection,
    keypair,
    collectionMint,
    collectionTokenAccount,
    keypair,
    1,
    [],
    {
      commitment: "finalized",
    }
  );
  console.log("minted To");

  const [collectionMetadataAccount, _b] = PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata", "utf-8"),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      collectionMint.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );
  const collectionMeatadataIX = createCreateMetadataAccountV3Instruction(
    {
      metadata: collectionMetadataAccount,
      mint: collectionMint,
      mintAuthority: publicKey,
      payer: publicKey,
      updateAuthority: publicKey,
    },
    {
      createMetadataAccountArgsV3: {
        data: {
          name: "Mint Events",
          symbol: "CNFT",
          uri,
          sellerFeeBasisPoints: 0,
          creators: null,
          collection: null,
          uses: null,
        },
        isMutable: true,
        collectionDetails: null,
      },
    },
    TOKEN_METADATA_PROGRAM_ID
  );
  const [collectionMasterEditionAccount, _b2] =
    PublicKey.findProgramAddressSync(
      [
        Buffer.from("metadata", "utf8"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        collectionMint.toBuffer(),
        Buffer.from("edition", "utf8"),
      ],
      TOKEN_METADATA_PROGRAM_ID
    );
  const collectionMasterEditionIX = createCreateMasterEditionV3Instruction(
    {
      edition: collectionMasterEditionAccount,
      mint: collectionMint,
      mintAuthority: publicKey,
      payer: publicKey,
      updateAuthority: publicKey,
      metadata: collectionMetadataAccount,
      tokenProgram: TOKEN_PROGRAM_ID,
    },
    {
      createMasterEditionArgs: {
        maxSupply: 0,
      },
    },
    TOKEN_METADATA_PROGRAM_ID
  );
  const sizeCollectionIX = createSetCollectionSizeInstruction(
    {
      collectionMetadata: collectionMetadataAccount,
      collectionAuthority: publicKey,
      collectionMint: collectionMint,
    },
    {
      setCollectionSizeArgs: { size: 10000 },
    },
    TOKEN_METADATA_PROGRAM_ID
  );

  const instructions: TransactionInstruction[] = [
    collectionMeatadataIX,
    collectionMasterEditionIX,
    sizeCollectionIX,
  ];

  const messageV0 = new TransactionMessage({
    payerKey: publicKey,
    recentBlockhash: blockHash,
    instructions,
  }).compileToV0Message();

  const transaction = new VersionedTransaction(messageV0);
  const serialized = transaction.serialize();
  const base64 = Buffer.from(serialized).toString("base64");
  return base64;
}

export default versionedTx;
