import { supabase } from '../lib/supabase'

export const getClients = async () => {
  const { data, error } = await supabase.from('clients').select('*')
  if (error) throw error
  return data
}

export const createClient = async (client: {
  name: string
  email: string
}) => {
  const { data, error } = await supabase
    .from('clients')
    .insert([client])
    .select()

  if (error) throw error
  return data
}