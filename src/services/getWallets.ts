import { supabase } from "./supabase";

async function getWallet(id: string) {
  const { data: EventRegisters, error } = await supabase
    .from("EventRegisters")
    .select("*")
    .eq("id", id);
  if (error) {
    throw new Error(error.message);
  }
  return EventRegisters;
}

export async function updateMint(id: string, email: string, change: boolean) {
  const [{ emailWallet: wallets }] = await getWallet(id);
  const object = wallets.map((e: { email: string; minted: boolean }) => {
    if (e.email === email) {
      e.minted = change;
    }
    return e;
  });
  const { data: emailWallet, error } = await supabase
    .from("EventRegisters")
    .update({ emailWallet: [...object] })
    .eq("id", id)
    .select();
  if (error) {
    throw new Error("Check if you are still Connected to the Internet 🥹");
  }
  return emailWallet;
}

export default getWallet;
