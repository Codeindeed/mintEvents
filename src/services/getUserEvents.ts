import { supabase } from "./supabase";
async function getUserEvents(wallet: string) {
  const { data: EventCreator, error } = await supabase
    .from("EventCreator")
    .select("*")
    .eq("walletAddress", wallet);
  if (error) {
    throw new Error("theres is an Error with the Connection");
  }
  return EventCreator;
}

export default getUserEvents;
