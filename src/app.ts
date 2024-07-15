import fastify from 'fastify';
import dotenv from 'dotenv';
import  routes from './routes';

dotenv.config();

const app = fastify({
    logger: true
});

app.register(routes);

app.get('/', async (request, reply) => {
    return "hello world ";
});


app.listen({ port: Number(process.env.PORT) }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server listening at ${address}`);
});