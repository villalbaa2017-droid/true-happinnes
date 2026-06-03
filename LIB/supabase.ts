import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "TU_PROJECT_URL",
  "TU_ANON_PUBLIC_KEY"
);