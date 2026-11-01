# Servidor de señalización para M5 Juntos

Solo intercambia los datos de conexión (~2 KB por persona). El audio no pasa por aquí.
Gratis en Render (se «duerme» tras 15 min sin uso y tarda ~30-50 s en despertar la primera vez).

## Publicarlo en Render
1. Sube esta carpeta a un repositorio de GitHub (por ejemplo `m5-signal`).
2. En render.com: **New → Web Service** → elige el repositorio.
3. Runtime **Node**, Build Command `npm install`, Start Command `npm start`, plan **Free**.
4. Cuando termine verás una dirección como `https://m5-signal.onrender.com`.
   Ábrela en el navegador: debe mostrar un JSON con el nombre `PeerJS Server`.
5. En `index.html` rellena la línea:
   `const MY_SIGNAL='wss://m5-signal.onrender.com/peerjs?key=peerjs';`
   (cambia el nombre por el de tu servicio) y vuelve a subir la página.

## Comprobar
En la página: «Ver diagnóstico de conexión» → «Probar servicio».
Las pruebas 1 y 2 deben decir ENTREGADA y emisor «sigue abierto».
