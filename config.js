// ============================================================
//  Configuracion del dashboard LAB SCADA QJU
//  Pega aqui la URL del proyecto y la clave PUBLICA (publishable / anon).
//  Supabase -> Project Settings -> API Keys.
//  NUNCA pongas aqui la clave secreta (sb_secret_...): este archivo queda publico en GitHub.
// ============================================================
window.SCADA_CONFIG = {
  SUPABASE_URL: "https://sjnflltectnybupibfmd.supabase.co",
  SUPABASE_PUBLISHABLE_KEY: "1804123",
  MINUTOS_TENDENCIA: 15,      // ventana de las graficas
  ZONA_HORARIA: "America/Bogota"
};
