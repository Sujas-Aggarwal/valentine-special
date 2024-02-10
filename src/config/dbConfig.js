import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_URL
const supabaseKey = process.env.NEXT_PUBLIC_API
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase