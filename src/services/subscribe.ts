import { supabase } from "./supabase";

type Id = string;
async function getUpdateEvent(id: Id, tiplink: Id, publickey: Id, email: Id) {
  const { data: EventRegisters, error: getError } = await supabase
    .from("EventRegisters")
    .select("*")
    .eq("id", id);
  const isInside = EventRegisters[0].emailWallet.find((obj) => {
    return obj.email === email;
  });
  if (isInside) {
    return null;
  }
  if (EventRegisters && !isInside) {
    const { data, error } = await supabase
      .from("EventRegisters")
      .update({
        emailWallet: [
          ...EventRegisters[0].emailWallet,
          {
            email,
            tiplink,
            publickey,
            minted: false,
          },
        ],
      })
      .eq("id", id)
      .select();
    if (error) {
      throw new Error(`${error.message}`);
    }
    return data;
  }

  if (getError) {
    throw new Error(`${getError.message}`);
  }

  return EventRegisters;
}

export default getUpdateEvent;