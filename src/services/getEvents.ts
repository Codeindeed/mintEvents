import { supabase } from "./supabase";

type id = string;
async function getEventId(id: id) {
  const { data: EventCreator, error } = await supabase
    .from("EventCreator")
    .select("*")
    .eq("id", id);
  if (error) {
    throw new Error(`${error.message}`);
  }
  return EventCreator;
}

export default getEventId;
