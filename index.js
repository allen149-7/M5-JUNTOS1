// Servidor de señalización para M5 Juntos: solo intercambia los datos de conexión (~2 KB).
// El audio NO pasa por aquí.
const { PeerServer } = require('peer');
const port = Number(process.env.PORT) || 9000;
PeerServer({
  port,
  path: '/',            // el WebSocket queda en  /peerjs  (lo que espera la página)
  key: 'peerjs',
  proxied: true,        // necesario detrás de Render / Fly / Railway
  allow_discovery: false,
  corsOptions: { origin: true },
});
console.log('Servidor de señalización escuchando en el puerto', port);
