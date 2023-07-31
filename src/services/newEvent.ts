import { supabase, supabaseUrl } from "./supabase";
import { PublicKey } from "@solana/web3.js";

type Input = {
  id: string;
  created_at: string;
  eventName: string;
  eventDesc: string;
  totalNum: number;
  endDate: string;
  walletAddress: PublicKey | string;
  image: File;
};
async function createEvent(Input: Input) {
  const imageName = `${Input.id}-${Input.image.name}`.split(" ").join("");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/EventImage/NftImage/${imageName}`;
  const { data, error } = await supabase
    .from("EventCreator")
    .insert([{ ...Input, image: imagePath }])
    .select();
  await supabase
    .from("EventRegisters")
    .insert([{ id: Input.id, emailWallet: [] }])
    .select();

  const { error: storageError } = await supabase.storage
    .from("EventImage/NftImage")
    .upload(imageName, Input.image);

  if (storageError) {
    const { error } = await supabase
      .from("EventCreator")
      .delete()
      .eq("id", Input.id);
    await supabase.from("EventRegisters").delete().eq("id", Input.id);
    throw new Error(`${storageError.message}`);
  }
  return data;
}

export default createEvent;
