import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://imbktlysakqhyswczesf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltYmt0bHlzYWtxaHlzd2N6ZXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY1MDcwMjcsImV4cCI6MTk5MjA4MzAyN30.8TPb_NtCd5VY1zX4go-7j3ifXwqLDi8SM9is1w50vUI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
