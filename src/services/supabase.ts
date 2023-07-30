import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://frxxoloswoofvavmamxw.supabase.co";
export const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || "";
export const supabase = createClient(supabaseUrl, supabaseKey);

