import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL || " ";
const SUPABSE_ANON_KEY = process.env.SUPABASE_ANON_KEY || " ";

const supabase = createClient(SUPABASE_URL, SUPABSE_ANON_KEY);

export default supabase;