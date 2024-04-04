import { createClient } from '@supabase/supabase-js'

// Suponiendo que tus variables de entorno están correctamente configuradas
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Función para probar la conexión a Supabase
async function checkSupabaseConnection() {
  const { data, error } = await supabase
    .from('test') // Cambia 'tu_tabla' por el nombre de una tabla real en tu base de datos
    .select('*')
    .limit(1) // Limitamos a 1 para simplemente verificar la conexión

  if (error) {
    console.error('Error al conectar con Supabase:', error)
    return;
  }

  console.log('Conexión con Supabase exitosa, datos:', data)
}

// Llamamos a la función para probar la conexión
checkSupabaseConnection()
