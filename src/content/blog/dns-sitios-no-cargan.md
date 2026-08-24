Si al intentar entrar a un sitio web tu navegador muestra alguno de estos errores, el problema está en la resolución DNS:

- `DNS_PROBE_POSSIBLE`
- `DNS_PROBE_FINISHED_NXDOMAIN`
- `SERVFAIL`
- `Could not resolve host`

## Causa

El navegador no logra obtener la dirección IP asociada al dominio, generalmente porque el servicio DNS de la red o del proveedor de internet falla o bloquea la consulta.

## Solución recomendada

Activar **DNS seguro (DNS-over-HTTPS)** en el navegador.

### Firefox

1. Abrir **Configuración**.
2. Ir a **Privacidad y seguridad**.
3. Buscar **DNS sobre HTTPS**.
4. Activarlo y seleccionar un proveedor como Cloudflare, NextDNS o Google.

### Chrome, Chromium y Brave

1. Abrir **Configuración**.
2. Ir a **Privacidad y seguridad**.
3. Entrar en **Usar DNS seguro**.
4. Activarlo y elegir un proveedor compatible.

## ¿Qué es DNS seguro?

DNS seguro envía las consultas DNS mediante una conexión cifrada HTTPS, mejorando la privacidad y evitando problemas que pueden producirse con la resolución DNS tradicional.

## Verificación

Una vez habilitado:

1. Recarga la página.
2. Limpia la caché DNS del navegador si es necesario.
3. Comprueba si el sitio web carga correctamente.

Si el problema desaparece tras activar DNS seguro, la causa probablemente esté relacionada con el servicio DNS utilizado por la red o el proveedor de internet.
