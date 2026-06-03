import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://vmsghazriuoaoivyimcj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtc2doYXpyaXVvYW9pdnlpbWNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1MTMzNzEsImV4cCI6MjA5NjA4OTM3MX0.mljQu1IX1fOxsGY2UKQR5G07JxD0Bhe8le6FfHHU6jYnpm install @supabase/supabase-js"
);