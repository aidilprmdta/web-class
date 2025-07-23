import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
const supabaseUrl = 'https://wvdvjqjyqgmdlkfiiuwx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkdnFpanlxZ21kbGtsZml1aXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyODQ0OTEsImV4cCI6MjA2ODg2MDQ5MX0.lz6H2OZxuwY8GUnb3jBurTVDkWYC2QgrUsRtJB3FBOw'

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL:", supabaseUrl);
  console.error("Supabase Anon Key:", supabaseKey);
  throw new Error("Supabase URL and Anon Key are required. Check your .env file and ensure they are prefixed with VITE_ and the dev server was restarted.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);