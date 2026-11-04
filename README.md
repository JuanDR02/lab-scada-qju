# LAB SCADA QJU – Dashboard en tiempo real

Página web estática que muestra en vivo los datos del laboratorio guardados en Supabase:
nivel, consigna y salida del PID, velocidad del variador, estados y alarmas, KPI de gerencia
(OEE, disponibilidad, rendimiento, margen, energía, materia prima, lotes, ventas) y los reportes generados.

```
PLC S7-1500 -> programa del PC (scada_nube.py) -> Supabase (PostgreSQL) -> esta página (solo lectura)
```

## Puesta en marcha

1. **Supabase (una vez):** SQL Editor -> New query -> pega `supabase_lectura_publica.sql` -> Run.
   Da permiso de **solo lectura** a la clave pública y activa Realtime. Nadie puede escribir ni borrar con esa clave.
2. **config.js:** pega la clave **pública** (`sb_publishable_...`) de Project Settings -> API Keys.
   Nunca pongas la clave secreta (`sb_secret_...`): este archivo queda público en GitHub.
3. **Probar en el PC:** abre `index.html` con doble clic. Sin clave, o con `index.html?demo=1`, muestra datos simulados.

## Subir a GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `lab-scada-qju`).
2. Sube `index.html`, `config.js` y `README.md` (Add file -> Upload files).
3. Settings -> Pages -> Source: *Deploy from a branch* -> Branch `main` / `(root)` -> Save.
4. En 1-2 minutos queda en `https://TU_USUARIO.github.io/lab-scada-qju/`.

## Notas
- Se actualiza solo por Realtime; si Realtime no está disponible, consulta cada 5 s.
- Si pasan más de 30 s sin datos nuevos, la página lo indica (PC o PLC apagado).
- Cualquiera con el enlace puede **ver** los datos. Para quitar el acceso, ejecuta el bloque *DESHACER* del SQL.
