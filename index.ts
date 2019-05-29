import Server from './server';

const LISTEN_PORT = process.env.LISTEN_PORT || 8081;

Server.listen(LISTEN_PORT, () => {
    console.log(`Server listening port ${LISTEN_PORT}...`);
});